// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 2000);
});

promise
  .then(result => {
    console.log(result);
  })

  .catch(error => {
    console.log(error);
  });
  // Success!

  