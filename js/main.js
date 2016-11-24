/* globals $ */
// VARIABLES are best kept near the top - it makes them easy to change later
var odd = true

// SETUP EVENTS
// we can set a function to run at some point in the future, measured in milliseconds
setTimeout(function () {
  // everything betwee the { } is our function logic
  console.log('It loaded 1 second (1000ms) Ago')

  // in jQuery we can use the same selectors we use in css
  // we can then hide/show/animate/etc those elements
  $('#achievements ul').slideUp('slow')
}, 1000)

// similar to setTimeout, but setInterval will keep running every x milliseconds
setInterval(function () {
  console.log('We update every 10 seconds')
}, 3000)

// we can tell javascript to trigger some code when the user starts to hover over an object
$('#achievements').on('mouseenter', function () {
  console.log('Mouse just started to hover over the achievements')
  // we can show the list
  $('#achievements ul').slideDown('slow')
})
// whilst they are hovering over it - warning this will trigger with every tiny move
$('#achievements').on('mouseover', function (event) {
  console.log('Mouse currently over achievements at x: ' + event.pageX + ', y: ' + event.pageY)
})
// and when they stop
$('#achievements').on('mouseleave', function () {
  console.log('Mouse just stopped hovering over the achievements')
  // we can hide it
  $('#achievements ul').slideUp('fast')
})
// we can tell when a user clicks on something
$('.biography img').on('click', function () {
  // we can change a variable value - such as toggling a value between true and false
  if (odd) {
    // we can do different stuff based on that value - like changing the image we use
    $('.biography img').attr('src', 'http://lorempixel.com/250/300/')
    odd = false
  } else {
    // change it back
    $('.biography img').attr('src', 'http://placehold.it/250x300')
    odd = true
  }
  console.log('User just clicked on an img iside the biography section')
})

// Code not in an event executes as soon as it is found
console.log('Our Webpage is now loaded')
