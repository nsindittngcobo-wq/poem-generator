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

let prompt = `Give detailed answer to ${promptElement.value}`;
let context = "You are a search engine that can answer any question. Write maximum of 20 lines answers to prompts in basic HTML. Follow norms for poems, recipies, lists and others. Be short, precise and to the point. Do not include a title or markdown code blocks.";

let poemElement = document.querySelector("#poem-content");
poemElement.classList.remove("hidden");
poemElement.innerHTML =` 💭 Generating an answer to '${promptElement.value}'`;

apiURL =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then (displayPoem)
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", generatePoem);