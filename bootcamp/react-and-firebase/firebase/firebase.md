# Firebase

## Add Firebase to your web app

1. Project Overview (Home) > select `</>`
2. register app by entering the app name
3. copy & paste firebase SDK into bottom of `<body>` in `index.html`

   ```html
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->

    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "my-firebase-api-key",
        authDomain: "bootcamp-first-firebase-f6e28.firebaseapp.com",
        projectId: "bootcamp-first-firebase-f6e28",
        storageBucket: "bootcamp-first-firebase-f6e28.appspot.com",
        messagingSenderId: "693864244186",
        appId: "1:693864244186:web:d7a1cb5da818dc9e3a56e3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
   ```

4. run live server > open dev tool > type `firebase` in console to check if the firebase has loaded.

## Create Realtime Database

1. Left menu bar > realtime database
2. choose `us central`
3. choose `test mode`

## Connect firebase realtime database to our app

1. Add database sub-module CDN after the firebase JS SDK

   ```html
   <!-- The core Firebase JS SDK is always required and must be listed first -->
   <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>
   <!-- Had to add this to make firebase.database available -->
   <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-database.js"></script>
   ```

```

2. Open network tab and apply JS filter

3. reload the page to see `firebase-app.js` and `firebase-database.js` downloaded with 200
```

## Selecting Firebase Collection

```js
// Get a reference to the "messages" part of our database
// we can also reference a collection that hasn't been initialized.
const messagesCollection = firebase.database().ref('messages');
```

## CRUD with Firebase

```js
// Add a new message;

// this will insert a new message for every reload
const pushObject = messagesCollection.push('Hello firebase!');

// set is a firebase way of "upsert" a doc.
const setPromise = messagesCollection.set('Hello firebase!');
```

## CAVEATS

### reference to the "child object" doesn't affect the "parent object"

```js
const userId = '123';
const profile = {
  colorSchemePreference: 'dark',
  location: 'The real world',
  bio: 'Something really depp and thoughtful',
};

const userDoc = firebase.database().ref(`users/${userId}`);

// This part of the code had run before and commented out
// const db = firebase.database().ref();
// db.set({
//   highscore: 12,
//   lastPlayed: 'yesterday',
// });

// When we save this file and reload the page,
// snapshot will still contain { highscore: 12, lastPlayed: 'yesterday' }
// because we haven't explicitly cleared db to overwrite from its children
db.on('value', (snapshot) => {
  console.log('We got value!');
  console.log(snapshot.val());
});
```

You can clear db before adding things to the children, but in general you shouldn't be setting the whole database in any place of your code except when you want to wipe it out.

```js
// GET DATA FROM FIREBASE
const db = firebase.database().ref();
db.set(null);
```

### Value event listener will run immediately after registration

Todo item will be rendered on initial page load & reload because the value handler will run when it gets registered.
Then, it will run whenever the change is made to the db.

```js
db.on('value', (snapshot) => {
  /// render todoArray
});
```

## Backing up without Upgrading

You can download db as JSON file.

- You can go to paid plan to access version control feature.

## Firebase Documentation

- [Get started with Firebase - Web](https://firebase.google.com/docs/web/setup?authuser=0)

- [Available Firebase Libraries](https://firebase.google.com/docs/web/setup?authuser=0#available-libraries)
