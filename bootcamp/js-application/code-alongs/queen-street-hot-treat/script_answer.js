const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Le Gourmand',
      price: '$',
    },
  ],
  tea: [
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Tealish',
      price: '$$',
    },
    {
      title: 'Teavana',
      price: '$',
    },
  ],
};

function randomItem(optionsArray) {
  const index = Math.floor(Math.random() * optionsArray.length);
  return optionsArray[index];
}

const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  const type = document.querySelector('input[name=beverage]:checked').value;
  const price = document.querySelector('input[name=price]:checked').value;

  const choice = drinks[type];
  const options = [];

  for (let i = 0; i < choice.length; i++) {
    const store = choice[i];

    if (store.price === price) {
      options.push(store)
    }
  }

  const optionToDisplay = randomItem(options);

  const results = document.querySelector('.results');
  results.innerHTML = `<h2 class="choice">${optionToDisplay.title}</h2>}`;
})