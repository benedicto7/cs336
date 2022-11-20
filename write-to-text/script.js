const calculateTextArea = () => {
  const textArea = document.getElementById("text-area");
  const words = document.getElementById("total-words");
  const characters = document.getElementById("total-characters");

  // Converts to uppercase after user release keyboard
  textArea.value = textArea.value.toUpperCase();

  // Total words
  const splitWords = textArea.value.split(" "); // turns the user input into an array object
  const checkIsAWord = splitWords.filter((aWord) => {return (aWord != "")}); // inputs every non-spacebar/non-blankspace in the original array into the new array
  const totalWords = checkIsAWord.length; // checking the total words by counting the length of the new array
  words.innerHTML = (totalWords === 1) ? totalWords + " word" : totalWords + " words";

  // Total characters
  const totalCharacters = textArea.value.length;
  characters.innerHTML = (totalCharacters === 1) ? totalCharacters + " character" : totalCharacters + " characters";
}