/*
    Valid Parentheses

    Description:
    Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
*/

function validParentheses(parens) {
  let openingBrackets = ['{', '[', '(']
  let closingBrackets = ['}', ']', ')']

  let stack = []

  for (let i = 0; i < parens.length - 1; i++) {
    let ch = parens[i];
    if (closingBrackets.indexOf(ch) > -1) {
      let matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0
}
