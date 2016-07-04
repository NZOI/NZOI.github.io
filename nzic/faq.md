---
title: FAQ
layout: nzic_page
nzic_weight: 40
---

## Frequently Asked Questions

#### Are there any prizes?

Unfortunately, there are no prizes. However, a good performance will give you bragging rights when the results are published, and will also ensure you get a place in the January training camp.

If you would like to sponsor a prize, please contact us. We are always looking for sponsors so that we can continue to send a team to represent NZ at the IOI each year, so please consider a cash donation to the NZOI.

#### How can I practice?

Once you register on our training site, you will have access to some easier problems. A practice contest problem set will be released before round 1 begins.

#### What type of problems will be in the contest?

The style of problems places an emphasis on problem solving skills, including logic and reasoning and other mathematical skills. Harder problems focus on the design of efficient and correct algorithms. The problem input and output formats are kept as simple as possible to minimise pre-processing. We aim to test problem solving skills rather than the ability to implement logic extraneous to the core problem on top of algorithms without bugs. Therefore, output will usually consist of a single number that proves that the problem was solved without requiring the output of the solution itself.

#### How difficult are the problems in each contest?

There will be 4 problems in each contest. The problems are categorized as Very Easy, Easy, Medium and Hard.

The Very Easy problem will be suitable for students who have just learnt the basics of programming. The solution will generally require no more than a single for loop, some if statements (logic) and several arithmetic operations (addition, subtraction, multiplication or (integer) division and modulo). Students should be able to read and output basic integers, numbers and characters. Some problem solving skills might be required to work out what arithmetic operations or logic is required.

The Easy problem may involve nested loops and arrays. It may involve sorting (using the built-in language function), counting, brute force or possibly greedy algorithm. Prior knowledge of algorithms will not be required. Rather, any algorithm involved will follow from simple mathematical reasoning.

The Medium problem may involve sorting algorithms, stacks, queues, priority queues (using built-in language functions), depth-first search, breath-first search (un-weighted shortest path), and simple 1-dimensional dynamic programming. This is roughly the material covered in the first half of the intermediate course at the January camp.

The Hard problem may involve shortest path, minimum spanning tree, topological sorting and slightly more difficult dynamic programming problems. This material is covered in the second half of the intermediate course at the January camp. However, students may still need some practice to successfully solve these in the contest, due to the difficulty in correctly implementing some of these algorithms.

#### How many points is each problem worth?

The rough point allocation will be 40 (Very Easy), 80 (Easy), 120 (Medium), 160 (Hard), 240 (Very Hard), adding up to 400 points in a regular round, and 600 points in the final round. The actual point value of each problem will vary from contest to contest depending on whether it could be considered an easier or harder problem in that category.

#### Are there any tips for scoring?

After doing the Very Easy and Easy problems, it isn't over even if you don't know much about algorithms! Partial points are awarded for Medium and Hard problems, depending on what subtasks you solve. At the bottom of each problem statement, there may be 1 or more subtasks listed, which specify what additional constraints certain test cases will meet. If your solution solves these smaller or simpler test cases, you can increase your contest score. The subtasks for Medium and Hard problems will usually be of Easy or Medium difficulty. Even if you are unable to fully solve a Hard problem, you shouldn't miss out on these points.

There may also be hidden subtasks - these are subtasks where some points can be earned, but where they are not explicitly specified by the problem statement. These may be for inefficient solutions, but other subtasks may have been included because they are a better guide towards the ideas required for a full solution. Alternatively, some subtasks may test the correctness of your solution when given edge cases.

#### What does the judging feedback mean?

In the best case scenario, the submission will compile and output the correct data. However, there will often be a problem with the submission.

The first thing that the judge does is compile the program (unless using an interpreted language). The compiler's error and warning messages are shown in the results, so it should be clear what the problem is. The command used to compile the program is also shown. The compilation process is subject to time (1 minute) and memory limits (384 MB). If compilation exceeds these resources, the process will be terminated, and compilation will fail. In C++, recursive use of macros or STL templates may require lots of time or memory to compile (eg. bitset).

Once compilation succeeds, the judge will execute the program once for each test case. If the execution is successful, the result of each test case can be Correct or Incorrect. For most problems, this is determined by matching the program's output with the expected judging output. After trimming trailing whitespace from each line, and trailing newlines, the output must match exactly. Some problems may use evaluators to determine correctness. For example, floating point numbers may be allowed to differ by a small amount.

Execution may fail due to a number of reasons. If it exceeds the time allowed, it will be terminated and it will fail the test case. If the memory limit is exceeded, the process is also terminated. A Fatal Signal appears if the program is terminated due to some other signal, such as a Segmentation Fault (for accessing outside the allocated memory). If the program exits with a non-zero return value, a Runtime Error is reported (eg. divide by zero).

Test cases are grouped into test sets. To score the points for the set, all test cases must be correct. These are often used to prevent lucky guesses of a single test case from scoring any points.

The result of the submission is shown as a percentage out of 100 on the submission's page. However, each problem in the contest will be re-scaled up to its maximum number of points. The re-scaled score is shown on the contest page. The points scored for each problem in the contest will be rounded down, before being added up to obtain the score for each contestant.

#### How will the individual scores be calculated for the year?

This is still a draft. However, the scores from rounds 1-4 will be sorted in order, to give a higher weight to the round where the contestant scored highest. The weighting ratio will be 1:2:3:4.

The season's maximum score will add up to 1000, 400 for the highest scoring round (multiplier of 1), then 300 (×0.75), 200 (×0.5) and 100 (×0.25). If the student did not compete in all rounds, the score will be calculated as 0. Therefore, it is possible to miss 1 round without a big effect on the seasons total (only 100/1000).

#### How will a school's score be calculated?

For each round, the school will receive a score with a weighting of 3:2:1 for the 3 top scoring students. This may change from round to round. For the final round, we will take the 2 highest scoring students weighted in a ratio of 3:2.

The season's maximum score of 1600 will be made up of 400 from each round.

Having more competitors might give a small advantage due to being able to pick the representative score from among more potential candidates. However, a school with 3 competitors will be able to compete on almost equal footing with any school with a much larger number of contestants.

#### What topics might a problem require?

The answer on problem difficulty gives a general idea of some of the topics relevant to each category. The problems and algorithms are based on the IOI syllabus. The topics covered are those which can be derived from elementary mathematics, and the main topics relevant to informatics are based on discrete mathematics. Topics in the IOI syllabus, but which were not mentioned in the guidelines above may be included in the NZIC if the problem's difficulty matches the category.

Excluded topics are max-flow, strongly connected components, hash tables, amortized analysis of algorithmic complexity or poorly conditioned problems for floating point numbers.

Implementation of self-balancing binary search trees are now included.
