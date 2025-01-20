"use strict";

document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); // prevent default click
    const target = document.querySelector('#works');
    target.scrollIntoView({
      behavior: 'smooth', // smoothness
      block: 'start',     // start
    });
});