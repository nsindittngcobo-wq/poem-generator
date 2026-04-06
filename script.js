function generatePoem (event){
event.preventDefault ();

 new Typewriter("#poem-content", {
   strings: "A little sunbeam, warm and bright,",
   autoStart: true,
   cursor: "",
   });
 }

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", generatePoem);