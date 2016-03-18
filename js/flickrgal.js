var flickrApiKey = '35ca9893a15649318240594ad7dd98e7'; // Change to your flickr api key
var flickrApiSecret = 'c440757b04345ffe'; // Change to your flickr api secret
var flickrUserId = '141088533@N02'; // Change to your flickr User ID

// Endpoint url and params
var endpoint = 'https://api.flickr.com/services/rest/?method=';
var params = '&format=json'
  + '&nojsoncallback=1' 
  + '&api_key=' 
  + flickrApiKey 
  + '&user_id=' 
  + flickrUserId;

// Request methods
var methodCollection = 'flickr.collections.getTree';
var methodPhotos = 'flickr.photosets.getPhotos';

var collections = []; // Stores collection information
var albums = []; // Stores full album / photoset information
var lightboxSet = []; // Stores the set of images open in lightbox
var prevState = []; // Stores objects to be re-inserted later

// Lightbox Template
var lightboxTemplate = document.createElement('div');
  lightboxTemplate.id = 'lightbox';
  lightboxTemplate.className = 'hide';
var lightboxUi = document.createElement('div');
  lightboxUi.id = 'lightbox-ui';
var imageStageEl = document.createElement('div');
  imageStageEl.id = 'stage';

var lightboxControls = '<div class="close" title="Close (Esc)"></div>'
  + '<div id="controls"><div id="arrow-left" class="prev" title="Prev"></div>'
  + '<div id="arrow-right" class="next" title="Next"></div></div>'; 
var infoEl = '<div id="info_container"><div id="info"><div id="title"></div>'
  + '<div id="description"></div></div></div>';
var imageBoxEl = '<div id="image-box-container"><div><div id="image-box"></div></div></div>';

lightboxUi.innerHTML = lightboxControls + infoEl;
imageStageEl.innerHTML = imageBoxEl;
lightboxTemplate.appendChild(lightboxUi);
lightboxTemplate.appendChild(imageStageEl);
// End Lightbox Template

// FUNCTIONS
//Event Handlers
function handle_click(event){
  var el = event.currentTarget;
  var type = el.className;
  switch(type){
    case 'album':
      var requestedAlbum = el.id;
      gallery.innerHTML = "";
      backButton.classList.remove('hide');
      build_images(requestedAlbum);
      window.scroll(0,0);
      break;
    case 'image': 
      var requestedImage = el.id;
      var album = el.getAttribute('album-id');
      lightbox.classList.remove('hide');
      build_lightbox(requestedImage, album);
      break;
    case 'navigate-back':
      gallery.innerHTML = "";
      for(var node in prevState){
        element = prevState[node];
        gallery.appendChild(element);
      }     
      backButton.classList.add('hide');
      loadingMessage.style.display = 'none';
      window.scroll(0,0);
      break;
    case 'close':
      lightbox.classList.add('hide');
      break;
    case 'prev':
      prev();
      break;
    case 'next':
      next();
      break;
  }
}
function handle_keys(event){
  var key = event.keyCode;
  switch(key){
    case 39:
      next();
      break;
    case 37:
      prev();
      break;
    case 27:
      lightbox.classList.add('hide');
      break;
  }
}
//End Event Handlers
function prev(){
  document.getElementById(lightboxSet[0]).classList.add('hide', 'hide-stage-image');
  var move = lightboxSet.pop();
  lightboxSet.unshift(move);
  document.getElementById(lightboxSet[0]).classList.remove('hide', 'hide-stage-image');
}
function next(){
  document.getElementById(lightboxSet[0]).classList.add('hide', 'hide-stage-image');
  var move = lightboxSet.shift();
  lightboxSet.push(move);
  document.getElementById(lightboxSet[0]).classList.remove('hide', 'hide-stage-image');
}
// Create New blank elements
function Element(type){
  this.el = document.createElement('div'); 
  this.el.className = type;
  this.loading = document.createElement('div'); 
  this.loading.className = 'image-loading';
  this.inner = document.createElement('div'); 
  this.inner.className = 'inner';
  this.dummy = document.createElement('div'); 
  this.dummy.className = 'dummy';
  this.title = document.createElement('div'); 
  this.desc = document.createElement('div');  
}
// Send new requests to flickr
function make_request(requestUrl, type, id){
  var flickrRequest = new XMLHttpRequest();
    flickrRequest.open('GET', requestUrl, true);
    flickrRequest.requestType = type;
    flickrRequest.requestID = id;
    flickrRequest.onload = handle_request;
    flickrRequest.send();
}
// Handle flickr requests
function handle_request(event) {
  var request = event.target;
  var responseData = JSON.parse(request.responseText);
  var type = request.requestType;
  var targetID = request.requestID;
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      console.log(type + ' request succeed');
      console.log('Response JSON:');
      console.log(responseData);

      switch (type){
        case 'collections':
          build_collections(responseData);
          break;
        case 'photosets':
          set_cover(responseData, targetID);
          break;
        case 'photo':
          // Todo, requests for higher resolution images in the lightbox
          break;
      }
    }else{
      console.log('Flickr ' + requestType + ' request failed!');
    }
  }
};
// Finds position in albums array for a given id
function get_album_pos(id){ 
  var position = "";
  for (var album in albums){
    albums[album].id == id ? position = album : false 
  }
  return position;
}
function to_lower_case(array){
  for(name in array){
      array[name] = array[name].toLowerCase();
  }
  return array;
}
// Appends background images and fades them in
function fade_in_image(id, url){
  var newElement = document.getElementById(id);
    newElement.style.backgroundImage = 'url(' + url + ')';
  var isLoading = newElement.querySelector('.image-loading');
    isLoading ? isLoading.style.opacity = 0 : false;
}
function build_image_url(image, size){
  var url =   'https://farm' 
        + image.farm
        + '.staticflickr.com/' 
        + image.server 
        + '/' 
        + image.id 
        + '_' 
        + image.secret
        + '_' 
        + size
        + '.jpg';
  return url;
}
//  Builds collections of albums from flickr 'photosets'
function build_collections(data) {
    var allCollections = data.collections.collection;
    for(collection in allCollections){
      var collectionObject = allCollections[collection];
      if (getAll) {
        collections.push(collectionObject);
        var sets = collectionObject.set
        for(set in sets){
          albums.push({   
            id: sets[set].id, 
            title: sets[set].title,  
            description: sets[set].description, 
            images: [] 
          });
        }
      }else{
        var title = allCollections[collection].title.toLowerCase();
        if (collectionsRequested.indexOf(title) >= 0) {
          collections.push(collectionObject);
          var sets = collectionObject.set
          for(set in sets){
            albums.push({   
              id: sets[set].id, 
              title: sets[set].title,  
              description: sets[set].description, 
              images: [] 
            });
          }
        }
      }
    }

    loadingMessage.style.display = 'none';

    // Build the albums for a collection
    Array.prototype.forEach.call(albums, function(album) {
      var newAlbum = new Element('album');    

      newAlbum.el.id = album.id;
      newAlbum.title.innerHTML = album.title;

      // Todo, hook up descriptions somewhere
      newAlbum.inner.appendChild(newAlbum.title);
      newAlbum.el.appendChild(newAlbum.loading);
      newAlbum.el.appendChild(newAlbum.dummy);
      newAlbum.el.appendChild(newAlbum.inner);
      newAlbum.el.addEventListener('click', handle_click);
      gallery.appendChild(newAlbum.el);
      
      prevState.push(newAlbum.el);
    });
    // Request cover images for albums
    Array.prototype.forEach.call(albums, function(album) {
      var url = endpoint 
        + methodPhotos 
        + '&photoset_id=' 
        + album.id
        + params;

      make_request(url, 'photosets', album.id);
    });
    // Initial gallery fade in
    gallery.classList.remove('hide');
  // });
};
function set_cover(data, id){
  // Organise and push image data to albums array
  var position = get_album_pos(id);
  var allImages = data.photoset.photo;
  Array.prototype.forEach.call(allImages, function(image) {
    var imageObject = {};
    imageObject.id = image.id;
    imageObject.farm = image.farm;
    imageObject.server = image.server;
    imageObject.secret = image.secret;
    imageObject.title = image.title;
    imageObject.is_primary = image.isprimary;
    albums[position].images.push(imageObject);

    if (imageObject.is_primary == 1) {
      var primaryImageUrl = build_image_url(imageObject, 'z');
      // Append image and fade it in
      fade_in_image(id, primaryImageUrl);
    }
  });
}
function build_images(id){
  var position = get_album_pos(id);
  var images = albums[position].images
  var size = 'z';
  
  Array.prototype.forEach.call(images, function(image) {
    var imageUrl = build_image_url(image, 'z'); 
    var newImage = new Element('image');
    var imageID = image.id;

    newImage.el.id = imageID;
    newImage.el.setAttribute('album-id', id);

    // newImage.el.appendChild(newImage.loading);
    newImage.el.appendChild(newImage.dummy);
    newImage.el.appendChild(newImage.inner);
    newImage.el.addEventListener('click', handle_click);
    gallery.appendChild(newImage.el);
    
    // Append image and fade it in
    fade_in_image(imageID, imageUrl);
  });
}
function build_lightbox(id, album){ 
  lightboxSet = [];
  var position = get_album_pos(album);
  var callingAlbum = albums[position].images;
  var stageID = 'stage-' + id;

  imageBox.innerHTML = '';
  Array.prototype.forEach.call(callingAlbum, function(image) {  
    var currentImage = document.getElementById(image.id);
    var initialUrl = currentImage.style.backgroundImage;
    var newImage = document.createElement('div');
      newImage.id = 'stage-' + image.id;
      newImage.classList.add('hide', 'hide-stage-image');
      newImage.style.backgroundImage = initialUrl;
      imageBox.appendChild(newImage);
      lightboxSet.push(newImage.id);
  });

  var activePos = lightboxSet.indexOf(stageID);
  var top = lightboxSet.slice(activePos);
  var bottom = lightboxSet.slice(0, activePos);

  lightboxSet = top.concat(bottom);

  document.getElementById(stageID).classList.remove('hide', 'hide-stage-image');
}

var gallery = document.querySelector('#flickrgal'); 
  gallery.className = 'hide';
var galleryNavigation = '<div id="navigation-container"><div class="navigate-back hide"><div>Back</div></div></div>';
var loadingGallery = '<div id="loading-gallery"><div>Loading...</div></div>';

if (gallery) {
  // Get the collection names
  var getAll = false;
  var collectionsRequested = gallery.getAttribute('collections');
    collectionsRequested = JSON.parse(collectionsRequested);
    collectionsRequested = to_lower_case(collectionsRequested);
    
    collectionsRequested.indexOf('all') >= 0 ? getAll = true : getAll = false;

  // Defining vars and events for all elements inserted dynamically on page load
  gallery.insertAdjacentHTML('beforebegin', galleryNavigation);
  gallery.insertAdjacentHTML('beforebegin', loadingGallery);
  gallery.parentNode.appendChild(lightboxTemplate);
  var lightbox = document.querySelector('#lightbox');
  var imageBox = document.querySelector('#image-box');
  var loadingMessage = document.querySelector('#loading-gallery');
  
  var closeButton = document.querySelector('.close')
  var backButton = document.querySelector('.navigate-back');
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  
  closeButton.addEventListener('click', handle_click);
  backButton.addEventListener('click', handle_click);
  prevButton.addEventListener('click', handle_click);
  nextButton.addEventListener('click', handle_click);

  window.addEventListener('keydown', handle_keys);

  // Start Loading the gallery
  console.log('Requested Collections: ' + collectionsRequested);
  // Make a collection request
  var url = endpoint
    + methodCollection
    + params;

  make_request(url, 'collections'); 
}
