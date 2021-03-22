$(function () {
  const $form = $('form');
  const $textInput = $('#item');
  const $list = $('ul');

  $form.on('submit', function (e) {
    e.preventDefault();
    const text = $textInput.val();
    if (!text) return;
    renderTodo(text);
    clearInput();
    focusInput();
  });

  function clearInput() {
    $textInput.val('');
  }

  function focusInput() {
    $textInput.focus();
  }

  // function renderTodo(text) {
  //   const $item = $(`<li><span class="todo"></span>${text}</li>`);
  //   bindItemClickHandler($item);
  //   $list.append($item);
  // }
  // function bindItemClickHandler($item) {
  //   $item.on('click', function () {
  //     $(this)
  //       .toggleClass('completed')
  //       .find('span')
  //       .toggleClass(['todo', 'done']);
  //   });
  // }

  function renderTodo(text) {
    const $item = $(
      `<li><span class="todo"></span><p>${text}</p><button class="delete-todo btn">remove</button></li>`
    );
    $list.append($item);
  }

  // you can pass target element as the second argument and jQuery will bind the handler to the selected element!
  $list.on('click', 'li', function () {
    $(this).toggleClass('completed').find('span').toggleClass(['todo', 'done']);
    // move completed item to the bottom
    $(this).appendTo($list);
  });
  // remove todo on "remove" button click
  $list.on('click', 'button.delete-todo', function (e) {
    // prevent click on button from triggering click handler on li (list item will be re-appended to list)
    e.stopPropagation();
    $(this).parent().remove();
  });
  // allow items to be dragged and dropped into a new place. (jQueryUI)
  $list.sortable({
    opacity: 0.5,
    axis: 'y',
  });

  // focus input on page load
  focusInput();
});
