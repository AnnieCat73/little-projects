//Js to activate/deactivate the active navbar i.e the white one

const nav = document.querySelector(".nav");

//The scroll event fires when the document view has been scrolled
window.addEventListener("scroll", fixNav);


function fixNav() {
  //console.log(window.scrollY, nav.offsetHeight);//we are scrolling vertically
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active');
  }

}

/**The offsetHeight property returns the viewable height of an element (in pixels) + 150 px. As soon as hit the point where window.
 * scrollY is bigger that offsetHeight + 150 active class gets added.
 * If not it stays the normal.
 */