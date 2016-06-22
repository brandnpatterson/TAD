// Nature is hidden by default.
$(document).ready(function() {
  $(".nature").hide();
  // When .switch is clicked, view .nature
  $(".switch").click(function() {
    $(".nature").show(), $(".people").hide()
  })
  // When .current is clicked, view .people
  $(".current").click(function() {
    $(".nature").hide(), $(".people").show()
  })
});
