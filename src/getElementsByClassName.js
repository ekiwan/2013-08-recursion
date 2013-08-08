// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  
  
//here is my old code. a friend helped me with it. could never get it to pass because it always 
//throws "results is not defined" even though i explicitly define it. also it seems like this should be woring
  var results = results || [];

  var seriouslyGetElementsByClassName = function (className, node) {
  
  var children = node.childNodes;

  
  if (_.contains(className, node)) { //if the className exists, add it to results
    results.push(root);
  }
  for (var i = 0; i < children.length; i++) {
    seriouslyGetElementsByClassName(className, children[i]);
  }

  };
  seriouslyGetElementsByClassName(className, children[i]);

    
  


  return results;
};
