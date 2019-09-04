$(document).ready(function() {

  // NAVBAR -- display/hide dropdown menu clicking on nav icon
  var hamburger = $(".nav__icon");
  hamburger.click(function(e) {
    $(".nav__menu").toggleClass('is-open');
    e.preventDefault();
  });

  // BACK BUTTON -- make "back to top "button appear/disappear
  var scrollTop = $(".scroll-to-top");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    // display back to top button after 100px scroll
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // END "back to top" button

  // SMOOTH SCROLL - Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number
      // of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

}); //END document.ready

//  NAVBAR -- transform menu icon from hamburger to cross and vice-versa
function hamburgerOrX(x) {
  x.classList.toggle("change");
} // END hamburger-cross toggle

//  NAVBAR -- hide dropdown menu after user selection
function hideMenu(x) {
  $(".nav__menu").toggleClass('is-open'); // hide dropdown menu
  $(".nav__icon").toggleClass('change'); // toggle (X) icon to hamburger icon
}


// MODAL -- Get the modal box
var lavoroModal = document.getElementById("lavoro-modal");
// Get the anchor that opens the modal
var lavoroLink = document.getElementById("lavoro-link");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the anchor, open the modal
lavoroLink.onclick = function() {
  lavoroModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  lavoroModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == lavoroModal) {
    lavoroModal.style.display = "none";
  }
};

// accordion for main contents
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // the function works on the next element (nextElementSibling)
    // thah is the element exactly next to the clicked one
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}