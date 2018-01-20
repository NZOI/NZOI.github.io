---
title: FAQ
layout: nzic_page
nzic_weight: 40
---

## Frequently Asked Questions

### Are there any prizes?

Unfortunately, there are no prizes. However, a good performance will give you bragging rights when the results are published, and will also ensure you get a place in the January training camp.

If you would like to sponsor a prize, please contact us. We are always looking for sponsors so that we can continue to send a team to represent NZ at the IOI each year, so please consider a cash donation to the NZOI.

### How can I practice?

Once you register on our training site, you will have access to some easier problems. Try practicing on problems from past NZIC contests.

### What type of problems will be in the contest?

The style of problems places an emphasis on problem solving skills, including logic and reasoning and other mathematical skills. Harder problems focus on the design of efficient and correct algorithms. The problem input and output formats are kept as simple as possible to minimise pre-processing. We aim to test problem solving skills rather than the ability to implement logic extraneous to the core problem on top of algorithms without bugs. Therefore, output will usually consist of a single number that proves that the problem was solved without requiring the output of the solution itself.

### How difficult are the problems in each contest?

There will be 4 or 5 problems in each contest. The problems range in difficulty, with the easiest being approachable to a beginner programmer, and the hardest being challenging for a student who has attended January Camp.

### Are there any tips for scoring?

After doing the easier problems, it isn't over even if you don't know much about algorithms! Partial points are awarded for the more difficult problems, depending on what subtasks you solve. At the bottom of each problem statement, there may be 1 or more subtasks listed, which specify what additional constraints certain test cases will meet. If your solution solves these smaller or simpler test cases, you can increase your contest score. Even if you are unable to fully solve a Hard problem, you shouldn't miss out on these points.

There may also be hidden subtasks - these are subtasks where some points can be earned, but where they are not explicitly specified by the problem statement. These may be for inefficient solutions, but other subtasks may have been included because they are a better guide towards the ideas required for a full solution. Alternatively, some subtasks may test the correctness of your solution when given edge cases.

### What does the judging feedback mean?

In the best case scenario, the submission will compile and output the correct data. However, there will often be a problem with the submission.

The first thing that the judge does is compile the program (unless using an interpreted language like Python). The compiler's error and warning messages are shown in the results, so it should be clear what the problem is. The command used to compile the program is also shown. The compilation process is subject to time (1 minute) and memory limits (384 MB). If compilation exceeds these resources, the process will be terminated, and compilation will fail. In C++, recursive use of macros or STL templates may require lots of time or memory to compile (eg. bitset).

Once compilation succeeds, the judge will execute the program once for each test case. If the execution is successful, the result of each test case can be Correct or Incorrect. For most problems, this is determined by matching the program's output with the expected judging output. After trimming trailing whitespace from each line, and trailing newlines, the output must match exactly. Some problems may use evaluators to determine correctness. For example, floating point numbers may be allowed to differ by a small amount.

Execution may fail due to a number of reasons. If it exceeds the time allowed, it will be terminated and it will fail the test case. If the memory limit is exceeded, the process is also terminated. A Fatal Signal appears if the program is terminated due to some other signal, such as a Segmentation Fault (for accessing outside the allocated memory). If the program exits with a non-zero return value, a Runtime Error is reported (eg. divide by zero).

Test cases are grouped into test sets. To score the points for the set, all test cases must be correct. These are often used to prevent lucky guesses of a single test case from scoring any points.

The result of the submission is shown as a percentage out of 100 on the submission's page. However, each problem in the contest will be re-scaled up to its maximum number of points. The re-scaled score is shown on the contest page. The points scored for each problem in the contest will be rounded down, before being added up to obtain the score for each contestant.

### What topics might a problem require?

The answer on problem difficulty gives a general idea of some of the topics relevant to each category. The problems and algorithms are based on the IOI syllabus. The topics covered are those which can be derived from elementary mathematics, and the main topics relevant to informatics are based on discrete mathematics. Topics in the IOI syllabus, but which were not mentioned in the guidelines above may be included in the NZIC if the problem's difficulty matches the category.

Excluded topics are max-flow, strongly connected components, hash tables, amortized analysis of algorithmic complexity or poorly conditioned problems for floating point numbers.

Implementation of self-balancing binary search trees are now included.
