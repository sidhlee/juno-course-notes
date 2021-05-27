import { useState } from 'react';

function useListItemsSwitcher(items) {
  // Create a state value for holding the index of the item
  // currently being displayed on the page
  const [currentListItemIndex, setCurrentListItemIndex] = useState(0);
  // Get the current item from the list of items
  const currentListItem = items[currentListItemIndex];

  // Create 2 functions for changing the current item
  // simply by updating the index state value
  const switchToNextItem = () => {
    let nextIndex = currentListItemIndex + 1;
    if (nextIndex >= items.length) {
      // Wrap around if we're at the end
      nextIndex = 0;
    }
    setCurrentListItemIndex(nextIndex);
  };

  // Event handler for switching to the previous item
  const switchToPrevItem = () => {
    let previousIndex = currentListItemIndex - 1;
    if (previousIndex < 0) {
      // Wrap around if we're at the beginning
      previousIndex = items.length - 1;
    }
    setCurrentListItemIndex(previousIndex);
  };

  // Return the current item and the updating function
  return [currentListItem, switchToNextItem, switchToPrevItem];
}

export default useListItemsSwitcher;
