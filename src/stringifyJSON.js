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
  else if (typeof obj === undefined) {
    str = '';
  }
  else if (typeof obj === "string") {
    str = '"' + obj + '"';
  }
  else if (typeof obj === "boolean" || typeof obj === "number") {
    str = '' + obj + ''; //booleans and numbers can be handled the same
  }
  else if (typeof obj === "object") {
    if (obj === null) {
        str = '' + obj + ''; //handle the case of empty object
    } 
  
  else { //handle the case of non-empty object
    str = '{'; //start with opening bracket
    var k = 0;
    for (var keys in obj) { //for each key in object
      if (typeof obj[keys] !== "function" && obj[keys] !== undefined) { //checks to see if the object has weird values
        if (k > 0) { //unless we are on the first key, add a comma
          str = str + ',';
        }
        str = str + '"' + keys + '"' + ':'; //add the key surrounded by quotes with a colon
        str = str + stringifyJSON(obj[keys]); //then send the value back into the function and add it after the key
      }
      k++; //iterate
    }
    str = str + '}'; //close off the object
  }
  }
  return str; 
};
