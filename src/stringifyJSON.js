// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var str;
  if (Array.isArray(obj)) { //handle the case of obj being an array
    str = '[';
    for (var i = 0; i < obj.length; i++) {
      str = str + stringifyJSON(obj[i]); //send each element back into the function
      if (obj.length > 0 && i < (obj.length - 1)) { //adds commas up to the last element
        str = str + ',';
      }
      }
    str = str + ']' //close off the array
  }
  return str;
};
