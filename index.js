/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let hour = parseInt(string)
  if (hour < 12) {
    return "Good Morning"
  } else if (hour <= 17 && hour >= 12) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById('greeting').innerHTML = string
}
