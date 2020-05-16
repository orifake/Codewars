/*
  How many ways can you make the sum of a number?

	Description:
  In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

  Examples
  sum(1) // 1
  sum(2) // 2  -> 1+1 , 2
  sum(3) // 3 -> 1+1+1, 1+2, 3
  sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
  sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

  sum(10) // 42
  */
function sum(num) {
  if (num < 0) {
    return
  }
  const temp = Array.from({ length: num + 1 }, () => 0)
  temp[0] = 1
  for (let i = 1; i < num; i++) {
    for (let j = i; j <= num; j++) {
      temp[j] += temp[j - i]
    }
  }
  return temp[num] + 1
};
