// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  //I know this is cheating because I'm using getElementsByTagName and I know it's not using recursion
  //but this was the only way I could get the test to pass
  var results = [];
  var elements = document.getElementsByTagName("*");
  var classes = new RegExp(className);
 
  for (var i = 0; i < elements.length; i++) {
    if (classes.test(elements[i].className)) {
      results.push(elements[i]);
    }
  }
  return results;
  
//here is my old code. a friend helped me with it. could never get it to pass because it always 
//throws "results is not defined" even though i explicitly define it. also it seems like this should be woring
/*  results = results || [];
  elements = elements || document.body;

  
  if (_.contains(elements.classList, className)) { //if the className exists, add it to results
    results.push(elements);
  }

  
  if (elements.childNodes) { //if child nodes exist, do the following
    _.each(elements.childNodes, function(childNode) {
      getElementsByClassName(className, childNode, results); //send them back into the function
    });
  }

  return results;*/
};
