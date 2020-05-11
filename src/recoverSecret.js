/*
  Recover a secret string from random triplets

	Description:
  There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

  A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

  As a simplification, you may assume that no letter occurs more than once in the secret string.

  You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.
*/

const recoverSecret = function (triplets) {
  let nodes = []
  let graph = {}
  let sortedList = []

  const visit = function (node) {
    if (sortedList.indexOf(node) === -1) {
      console.warn(1, node);
      (graph[node] || []).forEach((node2) => { visit(node2) })
      console.warn(2, node)
      sortedList.unshift(node)
    }
  }

  triplets.forEach(function (triplet) {
    triplet.forEach(function (node) {
      if (nodes.indexOf(node) === -1) nodes.push(node);
    })
    graph[triplet[0]] = (graph[triplet[0]] || []).concat(triplet[1])
    graph[triplet[1]] = (graph[triplet[1]] || []).concat(triplet[2])
  })

  console.warn(nodes);
  console.warn(graph);

  while (nodes.length) visit(nodes.pop());
  return sortedList.join('');
}

const triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]

console.warn(recoverSecret(triplets1))
