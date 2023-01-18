// this programme uses a promise to fetch information from an api, if the fetch works it will print the r
// result into the text editor console, if it fails, an error will be printed instead.

// this enables vsc to use the fetch module in node js to retrieve information
const fetch = require("isomorphic-fetch");

let quote = [];
fetch("https://www.affirmations.dev/")
  // once the data has been "fetched" it is converted to a JSON file, an object that can now be used
  // within VSC
  .then((res) => res.json())
  .then((result) => {
    // object is now placed into the empty array and logged to the console
    quote = result;
    console.log(quote);
  }),
  // if there is a problem and our promise fails, the error will be logged
  (error) => {
    console.log(error);
  };
