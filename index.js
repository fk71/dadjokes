

const showj = document.querySelector("#jokes"); // Select the h3 element to display the joke
const jokeBtn = document.querySelector("#btn"); // Select the button

// Prepare headers for the API request
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};


jokeBtn.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", requestOptions) 
    .then((response) => response.json()) 
    .then((result) => {
      console.log(result); 
      if (result && result.joke) {
        showj.textContent = result.joke; 
      } else {
        showj.textContent = "Oops! No joke available."; 
      }
    })
    .catch((error) => {
      console.error("Error:", error); 
      showj.textContent = "Failed to load joke."; 
    });
});
