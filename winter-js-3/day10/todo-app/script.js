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
    const $item = $(`<li><span class="todo"></span>${text}</li>`);
    $list.append($item);
  }

  // you can pass target element as the second argument and jQuery will bind the handler to the selected element!
  $('ul').on('click', 'li', function () {
    $(this).toggleClass('completed').find('span').toggleClass(['todo', 'done']);
  });
});
