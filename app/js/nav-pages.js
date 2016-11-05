$(document).ready(function(){
  $('#about, #carpentry, #components, #contact, #cutlery, #gardening, #hygiene, #mechanic, #n-abler, #sports-gear, #utencils').hide()

  $('#nav-about').click(function(){
    $('#about').siblings().hide()
    $('#about').show()
    $('.navbar-toggle').click()
    window.scrollTo(115, 115)
  })

  $('#nav-carpentry').click(function(){
    $('#carpentry').siblings().hide()
    $('#carpentry').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-components').click(function(){
    $('#components').siblings().hide()
    $('#components').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-contact').click(function(){
    $('#contact').siblings().hide()
    $('#contact').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-cutlery').click(function(){
    $('#cutlery').siblings().hide()
    $('#cutlery').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-gardening').click(function(){
    $('#gardening').siblings().hide()
    $('#gardening').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-home').click(function(){
    $('#home').siblings().hide()
    $('#home').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-hygiene').click(function(){
    $('#hygiene').siblings().hide()
    $('#hygiene').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-mechanic').click(function(){
    $('#mechanic').siblings().hide()
    $('#mechanic').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-n-abler').click(function(){
    $('#n-abler').siblings().hide()
    $('#n-abler').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-sports-gear').click(function(){
    $('#sports-gear').siblings().hide()
    $('#sports-gear').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#nav-utencils').click(function(){
    $('#utencils').siblings().hide()
    $('#utencils').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })

  $('#home a').click(function(){
    $('#n-abler').siblings().hide()
    $('#n-abler').show()
    $('.navbar-toggle').click()
    window.scrollTo( 115, 115)
  })
})
