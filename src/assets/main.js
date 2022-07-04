const options = document.querySelectorAll("#navbar li");
const inputss = document.getElementById("input-text");
const resultArea = document.getElementById("result-text");
const text = document.getElementById("text");
var textClass = "";
const alignButtons = ["left", "right", "center"];
const alignItems = document.getElementsByClassName("align");
/* Adding an event listener to each of the options in the navbar. */
for (let option of options) {
  option.addEventListener("click", () => {
    textClass = option.textContent.toLowerCase();
    /* Removing the class of the text if the text is already aligned to the left or right or center. */
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
/* Adding an event listener to the input field. */
inputss.addEventListener("input", (event) => {
  text.innerText = event.target.value;
});
