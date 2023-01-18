// this programme outputs the URL of a randomly generated cat gif into the console
// using async/await

const catPic = async () => {
  let photo = await fetch(
    "https://thecatapi.com/api/images/get?format=src&type=gif"
  );
  console.log(photo.url);
  return;
};

catPic();
