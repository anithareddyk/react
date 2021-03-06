// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: 
// instead of immediately returning the final value, the asynchronous method returns
//  a promise to supply the value at some point in the future.
//  A Promise is in one of these states:

// pending: initial state, not fulfilled or rejected.
//  fulfilled: meaning that the operation completed successfully.
//  rejected: meaning that the operation failed.
//  A pending promise can either be fulfilled with a val
let myFirstPromise = new Promise((resolve, reject) => {
  
  setTimeout(function(){
    resolve("Success!"); 
  }, 250);
});

myFirstPromise.then((successMessage) => {
  
  console.log("congrats! " + successMessage);
});


