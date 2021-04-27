// We've written some code you'll need for this app. Read through to understand what you're starting with, then work through the commented steps!

// We create a namespace object to hold our app:
const coolStore = {};

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!
coolStore.init = function () {
  // init all data
  coolStore.initializeData();

  // create selectors
  coolStore.createSelectors();

  // add event listeners
  coolStore.addEventListeners();

  // call other functions
  const availableInventory = coolStore.getAvailableInventory(
    coolStore.totalInventory
  );
  coolStore.displayItems(availableInventory, coolStore.currencies.usd);
};

coolStore.initializeData = function () {
  // This is the store's inventory data. Normally we would be grabbing data from elsewhere (ie. an external api), but here we will skip that step and assume this is data we've fetched:
  coolStore.totalInventory = [
    {
      title: 'Bowie Tee',
      url: 'images/bowie.jpg',
      price: 19.99,
      stock: 4,
    },
    {
      title: "Don't Know Tee",
      url: 'images/dontevenknow.jpg',
      price: 22.5,
      stock: 8,
    },
    {
      title: 'Doughnut Jean Jacket',
      url: 'images/doughnut.jpg',
      price: 59.0,
      stock: 5,
    },
    {
      title: 'Journey Tee',
      url: 'images/journey.jpg',
      price: 22.99,
      stock: 6,
    },
    {
      title: 'Skeleton Jean Jacket',
      url: 'images/someurl.jpg',
      price: 30.0,
      stock: 0,
    },
    {
      title: 'Skeleton Hand Tee',
      url: 'images/skeleton.jpg',
      price: 30.0,
      stock: 10,
    },
    {
      title: 'Juno Hoodie',
      price: 50.0,
      stock: 4,
    },
  ];

  // An object that allows us to organize information that will be displayed conditionally depending on what currency the user selects:
  coolStore.currencies = {
    usd: {
      exchange: 1,
      symbol: `$`,
      displayName: `USD`,
      altText: `the US flag`,
      flag: `images/USD-flag.png`,
    },
    cad: {
      exchange: 1.28,
      symbol: `$`,
      displayName: `CAD`,
      altText: `the Canadian flag`,
      flag: `images/CAD-flag.png`,
    },
    gbp: {
      exchange: 0.76,
      symbol: `£`,
      displayName: `GBP`,
      altText: `the UK flag`,
      flag: `images/GBP-flag.png`,
    },
  };
};

coolStore.createSelectors = function () {
  coolStore.navElem = document.querySelector('nav');
  coolStore.usdButton = document.getElementById('usd');
  coolStore.cadButton = document.getElementById('cad');
  coolStore.gbpButton = document.getElementById('gbp');
};

coolStore.addEventListeners = function () {
  coolStore.usdButton.addEventListener('click', () => {
    coolStore.handleCurrencyButtonClick('usd');
  });
  coolStore.cadButton.addEventListener('click', () => {
    coolStore.handleCurrencyButtonClick('cad');
  });
  coolStore.gbpButton.addEventListener('click', () => {
    coolStore.handleCurrencyButtonClick('gbp');
  });
};

coolStore.handleCurrencyButtonClick = (currency) => {
  const availableInventory = coolStore.getAvailableInventory(
    coolStore.totalInventory
  );
  // coolStore.displayItems(availableInventory, coolStore.currencies[currency]);
  coolStore.updatePrice(availableInventory, currency);
  coolStore.updateNav(currency);
};

coolStore.getSelectedCurrency = function () {};

coolStore.displayItems = function (inventory, currency) {
  const itemHtmls = inventory.map((item) => {
    const price = `${currency.symbol}${(item.price * currency.exchange).toFixed(
      2
    )}`;

    return `
        <li>
          <h2>${item.title}</h2>
          <img src="./${item.url}" alt="${item.title}"/>
          <p><span>${price}</span></p>
        </li>`;
  });

  document.querySelector('.inventory').innerHTML = itemHtmls.join('');
};

/** Only update the price of each item based on the selected currency. (avoids document reflow when replacing whole inventory with innerHTML) */
coolStore.updatePrice = function (displayedInventory, currency) {
  const priceNodes = document.querySelectorAll('.inventory > li > p');
  const { currencies } = coolStore;
  displayedInventory.forEach((item, i) => {
    const priceNode = priceNodes[i];
    const priceString = `${currencies[currency].symbol}${(
      item.price * currencies[currency].exchange
    ).toFixed(2)}`;
    priceNode.innerHTML = `<span>${priceString}</span>`;
  });
};

coolStore.updateNav = function (currency) {
  coolStore.navElem.innerHTML = `<p><span class="flag"><img src="${
    coolStore.currencies[currency].flag
  }" alt="${currency}" id="flag"></span><span id="currency">${currency.toUpperCase()}</span></p>`;
};

coolStore.getAvailableInventory = function (inventory) {
  return inventory.filter((item) => item.stock > 0 && item.url);
};

// STEP TWO: Write a function that will filter the inventory, so that we will display only items which are both in stock and have images.

// STEP THREE: Write a function that displays the available inventory on the page, in the correct currency.
// Hint: Consider what kind of information this function needs (ie. which parameters it should take) to properly display all of our information.
// For now, display items on the page by passing in USD as the default currency.

// STEP FOUR: Attach an event listener that will notice when a user clicks on a currency button, finds out which currency they have selected, and calls our display items method again. Don't forget to update the flag at the top right, too!

coolStore.init();
