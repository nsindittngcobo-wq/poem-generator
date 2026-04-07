function displayPoem (response){
 new Typewriter("#poem-content", {
   strings: response.data.answer,
   autoStart: true,
   delay: 20,
   cursor: "",
   html: true,
   })
   
}


function generatePoem (event){
event.preventDefault ();
let promptElement = document.querySelector("#prompt-space");
apiKey = "ec8t62ba8b244884fo89d6da5a743070";

let prompt = `Generate a poem about ${promptElement.value}`;
let context = "You are a very creative writer with unique ideas. Write a 5 line poem as prompted in basic HTML. Separate each line with a <br/>. Be short and precise. Do not include a title or markdown code blocks.";

let poemElement = document.querySelector("#poem-content");
poemElement.classList.remove("hidden");
poemElement.innerHTML =` 💭 Generating a poem about ${promptElement.value}`;

apiURL =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then (displayPoem)
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", generatePoem);