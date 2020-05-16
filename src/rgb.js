/*
    RGB To Hex Conversion

    Description:
    The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

    The following are examples of expected output values:

    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
  function fix(num) {
    return num < 0 ? 0 : (num > 255 ? 255 : num)
  }
  function pad(str) {
    return ('0' + str).slice(-2)
  }

  function RGB2Hex(num) {
    return pad(fix(num).toString(16))
  }

  return (RGB2Hex(r) + RGB2Hex(g) + RGB2Hex(b)).toUpperCase()
}
