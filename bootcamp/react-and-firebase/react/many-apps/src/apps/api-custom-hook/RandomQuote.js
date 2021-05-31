import useApiData from './useApiData';
/*
API Data Custom Hook Exercise
=============================
Make sure you've installed the exercise dependencies with `npm install`!
Start the project development server with `npm start`
We're going to extract the API request code into it's own custom Hook so it can be used wherever an
API request is required in this and future projects
1. Create a new file called `useApiData.js`.
2. Add a new function in that file called `useApiData` and export it.
3. Add an import statement to the file that imports the new custom hook.
4. The new hook should create 3 state values and store them in variables:
  - url: the API URL that is to be fetched,
  - isLoading: a boolean value indicating if an API call is in progress, and
  - data: the data returned from the API call
5. The Hook should also take an argument for the initial URL to fetch. Add an `initialUrl` argument 
  to the Hook function, and provide it as an initial value for the URL state value.
6. The new hook should return 2 values for other components to use:
    - data: the state value variable containing the data returned by the API call, and
    - isLoading: the state value variable containing the boolean value indicating if an API call is 
      in progress
7. Update the `RandomQuote` component remove the now outdated state values, and destructure the 
  `useApiData` Hook's return values into 2 variables with names that make more sense in the context
  of the component's scope:
    - quoteData, and
    - isLoading
8. Move the useEffect call from the RandomQuote component into the new custom Hook and update it to 
  use the hook's new state value variables.
9. Pass the quoteApiUrl as an argument to the useApiData call in the RandomQuote Component.
10. Remove the `another` function and it's the More Button's onClick handler.
11. Enable components to create new API requests by adding `setUrl` to `useApiData`'s return values, 
  and make the `useEffect` call dependent on the `url` state value variable.
12. Destructure the return value for the `setUrl` function into a variable called `fetchNewUrl`.
13. Update the More Button's onClick handler to an anonymous function which calls `fetchNewUrl` with
  the quoteApiUrl variable.
14. After an API request has completed clear the URL state value, and make sure the `fetchData` 
  function is only executed when `url` isn't empty.
*/
function RandomQuote() {
  const quoteApiUrl = 'https://thesimpsonsquoteapi.glitch.me/quotes';

  const [quoteData, isLoading, fetchQuoteDataFromUrl] = useApiData(quoteApiUrl);

  // useEffect(() => {
  //   // We can't make useEffect's callback async, so use a function within the callback to simplify
  //   // fetch's promise responses
  //   const fetchData = async () => {
  //     // Starting a new request
  //     setIsLoading(true);
  //     const response = await fetch(quoteApiUrl);
  //     const apiData = await response.json();
  //     setQuoteData(apiData);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);
  const another = () => {
    // // we can't make useEffect's callback async, so use a function within the callback to simplify
    // // fetch's promise responses
    // const fetchData = async () => {
    //   // Starting a new request
    //   setIsLoading(true);
    //   const response = await fetch(quoteApiUrl);
    //   const apiData = await response.json();
    //   // Store the response in a state value
    //   setQuoteData(apiData);
    //   // All done!
    //   setIsLoading(false);
    // };
    // fetchData();
    fetchQuoteDataFromUrl(quoteApiUrl);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        quoteData && (
          <>
            <blockquote>
              <span>{quoteData[0].quote}</span>
              <cite> - {quoteData[0].character}</cite>
            </blockquote>
            <nav>
              <button onClick={another}>More</button>
            </nav>
          </>
        )
      )}
    </>
  );
}
export default RandomQuote;
