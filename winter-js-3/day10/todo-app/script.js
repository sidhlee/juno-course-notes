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

  // delegate event to parent element! => now you can separate event binding from renderer!
  // $('ul').on('click', function (e) {
  //   $(e.target)
  //     .toggleClass('completed')
  //     .find('span')
  //     .toggleClass(['todo', 'done']);
  // });

  // or you can pass target element as the second argument
  $('ul').on('click', 'li', function () {
    $(this).toggleClass('completed').find('span').toggleClass(['todo', 'done']);
  });
});
