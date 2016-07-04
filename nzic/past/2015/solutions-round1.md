---
title: 2015 Round 1 Solutions
layout: nzic_page
nzic_weight: -1
---

# NZIC 2015 Round 1 Solutions

There were 4 problems worth a total of 400 points.

## Double-Itis

_Author: Ben Anderson, Preparation: Andrew Kampjes_

This was a simple problem. Simply divide the age Andrew gives by 2, and round down. Then print Yes or No after comparing it with the theme park's minimum age. Many incorrect answers printed prompts to the standard output. Please be aware that the exact output format as described in the problem statement is required, we suggest that new competitors try the practice problems.

## PileSort

_Author: Ronald Chan_

This can be done greedily. For each page, only make a new pile if it cannot be placed on top of any existing pile. If it can be placed on top of an existing pile, place it on the pile with the lowest numbered top page (that is greater than the new page) already.

This is because, once a page is placed on top of a pile, only lower numbered pages can be placed on top, therefore, we should keep the top page on each pile as large as possible.

Implementations using linear search will score 48/80 for a quadratic-time algorithm. To score full marks, the simplest implementation is to use a set/map (self-balancing binary search tree), or use a sorted vector with binary search.

## Fishy Containers

_Author: Ronald Chan, Preparation: Ronald Chan and Alan Ansell_

This problem is a topological sort of the containers, since those on top must be removed first. Whenever there are differing container numbers in vertically adjacent cells, there exists a directed edge representing this requirement.

Any algorithm for topological sort will score 40%, including linear-time depth-first search.

One method to achieve the required optimal ordering of containers is a divide-and-conquer algorithm akin to quicksort. Starting with the lowest remaining number as the pivot, the other containers can be partitioned into those which must appear before the pivot, and those which can appear after. The two partitions may be recursively sorted in this way. However, this has a quadratic worst-case time complexity, so will timeout in the largest test cases (worth 40%).

To score full marks, we must observe that the required order is equivalent to the reverse order being the lexicographically largest topological sort. To understand this, consider the containers with 0 out-degree (ie. can appear last). In this set, the highest numbered container should appear last. If it did not, we could obtain a better ordering as described in the problem statement. To see this, for some ordering where the highest numbered container were not last, consider if it was moved to ship last, without altering the order of any other container. We can see that some lower numbered container(s) now appear earlier, and none of them appear later.

Therefore, the full solution is to topologically sort the containers in reverse using a priority queue. At any time, the containers with 0 out-degree will be placed in the priority queue. From the priority queue, highest numbered container is placed last, and any edges to this container are deleted, updating the out-degree of any other vertices. Any vertex with an out-degree which becomes zero gets placed into the priority queue.

## The Greatest Stew

_Author: Ronald Chan, Preparation: Ronald Chan and Tony Sun_

This problem is based on the 0-1 knapsack. When b_i = 0, the problem is equivalent to a 0-1 knapsack problem.

To make further headway into this problem, consider the subset of ingredients chosen for the stew. If t_i = 1 for all i, the best way to order these ingredients is obviously by b_i. We want to place all ingredients with b_i >= 0 in descending order as early as possible. The ingredients with b_i < 0 should be added as late as possible. We can modify the knapsack problem by first sorting the ingredients by b_i before adding them following the knapsack algorithm. Between the ingredients with positive and negative b_i, there may be unused time (add pseudo-ingredients with no value, like un-bounded knapsack).

When t_i is not always 1, the sorting order is more complex. In this case, we should sort ingredients by b_i/t_i. The reason behind this is left as an exercise for the reader.
