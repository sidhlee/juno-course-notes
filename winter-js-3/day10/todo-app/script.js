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

  function renderTodo(text) {
    const $item = $(`<li><span class="todo"></span>${text}</li>`);
    bindItem($item);
    $list.append($item);
  }

  function clearInput() {
    $textInput.val('');
  }

  function focusInput() {
    $textInput.focus();
  }

  function bindItem($item) {
    $item.on('click', function () {
      $(this)
        .toggleClass('completed')
        .find('span')
        .toggleClass(['todo', 'done']);
    });
  }
});
