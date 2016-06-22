// nav pages
$(document).ready(function() {
  // contact and pencil, and photography divs are hidden by default
  $('.contact, .pencil, .photography').hide();

  // hide all divs besides .contact
  $('.nav-contact').click(function() {
    $('.home, .pencil, .photography').hide();
    $('.contact').show();
  })

  // hide all divs besides .home
  $('.nav-home').click(function() {
    $('.contact, .pencil, .photography').hide();
    $('.home').show();
  })

  // hide all divs besides .pencil
  $('.nav-pencil').click(function() {
    $('.contact, .home, .photography').hide();
    $('.pencil').show();
  })

  // hide all divs
  $('.nav-printmaking').click(function() {
    $('.contact, .home, .pencil, .photography').hide();
  })

  // hide all divs besides .photography
  $('.nav-photography').click(function() {
    $('.contact, .home, .pencil').hide();
    $('.photography').show();
  })
});
