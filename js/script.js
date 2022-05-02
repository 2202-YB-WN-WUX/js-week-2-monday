// initialise the animations
// AOS.init();

console.log("test");

const header = document.getElementById('h2');
const firstBtn = document.getElementById('first-button');

firstBtn.onclick = function() {
  header.classList.toggle("shadow");
}

// Activity -
//
// Put a lorem image on the right bottom corner.
// Toggle the image opacity on a button click so it hides and shows.
//
// If finished, toggle the background color to a gradient too,
// with the same button.
//
// const secondBtn = document.getElementById('second-button');
// const loremImg = document.getElementById('lorem-img');
//
// secondBtn.onclick = function() {
//   loremImg.classList.toggle("hidden");
// }

// gradient
// const body = document.getElementById('body');
//
// body.onclick = function() {
//   body.classList.toggle("gradient");
// }

// Activity -
// Show and hide a small modal on a button click.
// Modal is an HTML element, a DIV which is
// display:none by default.
// Turn on a class which makes it display:block.



const modalBtn = document.getElementById('modal-button');
const modal = document.getElementById('modal');

// testing if my variable exists
console.log(modalBtn);

modalBtn.onclick = function() {
  modal.classList.toggle("open");
}

const closeBtn = document.getElementById('close-button');

closeBtn.onclick = function() {
  modal.classList.toggle("open");
}


// Activity: create a close button on the modal.
// It can be a DIV. Put a bootstrap icon in it,
// to make it show an "x". Clicking the button
// should close the modal.

const firstNameInput = document.getElementById('first-name-input');
const alertBtn = document.getElementById('alert-button');

alertBtn.onclick = function() {
  let name = firstNameInput.value;
  console.log(name);
  alert(`Hello, ${name}!`);
}

// commenting App
const usernameInput = document.getElementById('username-input');
const commentInput = document.getElementById('comment-input');
const postBtn = document.getElementById('post-button');
const commentsUl = document.getElementById('comments-list');

postBtn.onclick = function() {
  console.log("You posted!");
  let username = usernameInput.value;
  let comment = commentInput.value;
  commentsUl.innerHTML += `
  <li>
    Username: ${username}
    <br>
    ${comment}
  </li>`;
}


// Show the comments on the screen
// Show them as <li> items
// Set up an empty <ul> to contain them
// You want to add an ID onto the UL
// I.e. get your UL in JS, and change the innerHTML
// Use innerHTML +=
