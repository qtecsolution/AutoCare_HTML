function moveToNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    if (nextFieldID) {
      document.getElementById(nextFieldID).focus();
    } else {
      current.blur();
    }
  }
}
function moveToPrevious(event, currentFieldID, previousFieldID, nextFieldID) {
  if ((event.key === "Backspace" || event.key === "Delete") && event.target.value === "") {
    if (previousFieldID) {
      document.getElementById(previousFieldID).focus();
    } else {
      document.getElementById(currentFieldID).focus();
    }
  } else if (event.key === "ArrowLeft" && previousFieldID) {
    document.getElementById(previousFieldID).focus();
  } else if (event.key === "ArrowRight" && nextFieldID) {
    document.getElementById(nextFieldID).focus();
  }
}
