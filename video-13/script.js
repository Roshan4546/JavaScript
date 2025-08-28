// TODO Fetch API

// ? The fetch API provides an interface for fetching (sending/reciving) resources.
// * it uses request and response objects.
// * The fetch() method is used a reasource(data).
// ! it return a  let promise = fetch(url,[option]).

// const url = "https://dog.ceo/api/breeds/image/random";



// const getPics = async () => {
//     console.log("getting data ...");
//     let response = await fetch(url);
//     console.log(response); // JSON format.
//     let data = await response.json();
//     console.log(data);
// };

// ! AJAX is Asynchronous JS and XML
// ! JSON is javaScript Object Notation
// ! json() method return a second promise that resolves with the result of parshinng the response body text as JSON(input is JSON and output is JS object).


const url = "https://dog.ceo/api/breeds/image/random";

const getPics = async () => {
    console.log("Getting dog image...");

    try {
        const response = await fetch(url);         // Step 1
        const data = await response.json();         // Step 2 convert into json file
        const imageUrl = data.message;              // Step 3

        const img = document.createElement("img");  // Step 4
        img.src = imageUrl;                         // Step 5
        img.alt = "Random Dog";
        img.width = 300;

        const picsContainer = document.getElementById("pics");
        picsContainer.innerHTML = "";               // Clear previous image
        picsContainer.appendChild(img);             // Step 6
    } catch (error) {
        console.error("Error fetching image:", error);
    }
};

getPics(); // Call the function when page loads
