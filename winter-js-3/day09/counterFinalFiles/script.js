/**
 * Don't know where to start? Here are some pointers,
 *
 * 1. Have you checkout the index.html in Firefox?
 * 2. Let's start with some button listeners to count up and down the counter.
 * 3. Then we will accept user input to set our counter goal.
 * 4. And think about how we will alert the celebration message to user when the
 * goal is reached.
 * 5. Bonus: Reset the goal once it's reached.
 */
console.log('hey');

let counter = 0;
let goal = null;

$('#subtract').on('click', function () {
  --counter;
  renderCounter();
  checkGoal();
});

$('#add').on('click', function () {
  ++counter;
  $('.counter').text(counter);
  renderCounter();
  checkGoal();
});

function renderCounter() {
  $('.counter').text(counter);
}

function checkGoal() {
  if (counter === goal) {
    const $message = $('<h2>').text('Congrats, the goal has been reached!');
    console.log($message);
    $('.wrapper').first().prepend($message);
    resetGoal();
  }
}

function resetGoal() {
  counter = 0;
  goal = null;
  $('#goal').val('');
  $('#goal').removeClass('set');
  $('input[type="submit"]').removeClass('submitted');
}

$('form').on('submit', function (e) {
  e.preventDefault();
  goal = +$('#goal').val();

  $('#goal').addClass('set');
  $('input[type="submit"]').addClass('submitted');
});

$('#goal').on('focus', function () {
  $('h2').remove();
});
