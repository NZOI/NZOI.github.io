---
title: Rules
layout: nzic_page
nzic_weight: 20
---

## NZIC Contest Rules

These are subject to change until each contest begins.

### Scoring

There will be official scoreboards for individual students and an informal one for schools.

Each student will be ranked for the year based on a weighted sum of their round 1-3 scores. The higher scores will have a larger weighting than lower scores.

The scoring system is subject to change at the discretion of the contest administrator.

### Cheating and inappropriate behaviour

Breaching the rules will result in instant disqualification.

Inappropriate behaviour involves being dishonest, taking advantage of our systems, or acting in a way that is not in the spirit of the competition. Behaviour is determined to be inappropriate by the contest administrator and will be dealt with at their discretion. The offending account may be deleted and the student may be disqualified.

### Eligibility

Any person who is currently enrolled in a New Zealand secondary or intermediate school. Non-eligabile students may still compete but they will not be offically ranked.

### Contest environment

Each contest will be held online. After logging into [https://train.nzoi.org.nz/](https://train.nzoi.org.nz/), the contest will appear at the start time. When ready, students may start the contest. The 3 hours will begin at that time. The problems will be visible on the contest page, and submissions may be made from there. To submit a solution, students submit the source code, which will be compiled and executed on the judging system.

After the submission is judged, the results will appear immediately. Students may use this to fix any bugs. There are no guarantees on how long it might take for the submission to be judged, if there are a large number of submissions made at the same time.

#### Programming languages

Students may use any programming language supported by the site. Currently, these are C++ (C++11, C++03), C (C99), Java (1.6), Python (2.7, 3.4), Ruby (2.2) and Haskell (2010).

Because Python and Ruby are interpreted, it is possible that the required algorithms on some problems cannot be implemented efficiently, causing a timeout, and scoring only ~50-70%. If possible, there will be enough time for all languages, but this is sometimes not possible as a highly optimized but inefficient solution would otherwise pass. We will not increase the time limit for interpreted languages because this cannot be done fairly (C extensions may be used in parts of the standard libraries). Students who can solve these problems, but regularly timeout on the largest test cases are advised to use a compiled language.

Please note that with Java, the source code will be put in a file called `Main.java`, so submissions must use a class named `Main`. At this stage, defining additional classes is not supported (sorry).

#### Local editors and compilers

The editors and compilers on local machines may vary from school to school, depending on what is available, including the operating system installed on the computers.

We suggest that schools have at least a basic text editor (such as Gedit or Notepad++). The compiler may vary depending on the language, but for C++, gcc/g++ is suggested as this is what is used for judging. For Windows, Dev-C++ is a light-weight fully featured editor/IDE and compiler that is probably the easiest to install. It is also much easier to use as new users have trouble setting up projects in Visual Studio or Eclipse.

For power users, we suggest that the compiler be made available on the command line. This is already the case with Linux operating systems. For Windows, for which cmd.exe lacks many features and is difficult to use, MinGW (including a port of GCC) is recommended along with MSYS as a command-line interface. Cygwin is not recommended because it may be too slow. The compile command used by the online judging software is displayed on the results page after submitting a solution.

#### Documentation and other material during the contest

While competing, students may only access the [https://train.nzoi.org.nz/](https://train.nzoi.org.nz/) website, or an official (static) language documentation site (language documentation installed locally may also be used). Electronic language documentation (but not source code) stored locally is also permitted. Forums or interactive websites are strictly forbidden.

Students may also use any printed material during the contest, including language documentation, textbooks or source code. These materials may not be shared.

Students may not access or use any electronically stored source code, whether it is stored locally or on the internet. This includes source code written by the student prior to the contest. All source code submitted must be written during the contest, without any collaboration.

#### Help

Students may ask a supervisor questions on administrative tasks, such as, when the contest ends or how to use the website to make a submission.

Questions such as how to solve a problem, how use a language feature, or where a bug is in a program will not be answered. The student should be able to find out how to use a language feature by reading the language documentation.

If a student is new to a programming language, we suggest that they bring printed sample source code for reference.

Any questions related to the problems should be emailed to <nzic@nzoi.org.nz> for a response.