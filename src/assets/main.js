const options = document.querySelectorAll("#navbar li");
const inputss = document.getElementById("input-text");
const resultArea = document.getElementById("result-text");
const text = document.getElementById("text");
var textClass = "";
const alignButtons = ["left", "right", "center"];
const alignItems = document.getElementsByClassName("align");
for (let option of options) {
  option.addEventListener("click", () => {
    textClass = option.textContent.toLowerCase();
    // remove all the class wich contains items of alignButtons
    console.log(text);
    for (let items of alignItems) {
      if (
        text.classList.contains(items.textContent.toLowerCase()) &&
        alignButtons.includes(textClass) &&
        items.textContent.toLowerCase() != textClass
      ) {
        items.classList.remove("active");
        text.classList.remove(items.textContent.toLowerCase());
      }
    }
    text.classList.toggle(textClass);
    option.classList.toggle("active");
  });
}
inputss.addEventListener("input", (event) => {
  text.innerText = event.target.value;
});
