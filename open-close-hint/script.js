const hint = () => {
  const textState = document.getElementById("hint-text-1");

  if (textState.style.display === "none") {
    textState.style.display = "block"; // shows the hint paragraph
  }
  else {
    textState.style.display = "none"; // hides the hint paragraph
  }

}

const anotherHint = () => {
  const buttonState = document.getElementById("hint-button-2");

  // When the value is false, or when the user clicks the button, change the HTML text of the button and paragraph
  if (buttonState.value === "false") {
    document.getElementById("hint-button-2").innerHTML = "Click here to close hint";
    document.getElementById("hint-text-2").innerHTML = "In order to create a button that shows a hidden text, <br> we must create an empty string in the p tag. <br> Then we must use the onclick function and document.getElementById() <br> to create an event that both shows and hide the text.";
    buttonState.value = "true";
  }
  // When the value is true, or when the user clicks the button again, changes the
  // text of the button and removes the HTML text of the paragraph to be a blank string
  else {
    document.getElementById("hint-button-2").innerHTML = "Click here to open hint";
    document.getElementById("hint-text-2").innerHTML = "";
    buttonState.value = "false";
  }
}
