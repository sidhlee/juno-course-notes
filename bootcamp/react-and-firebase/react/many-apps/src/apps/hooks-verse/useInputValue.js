const { useState } = require('react');

/**
 *
 * @param {*} initialValue
 * @returns {[inputValue: string, handleChange: (e: Event) => void, clearInput: () => void)]}
 */
const useInputValue = (initialValue = '') => {
  // State-controlled input value
  const [inputValue, setInputValue] = useState(initialValue);

  // Create an event handler to use to update the state value
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Create a simple method that clears the sate value
  const clearInput = () => {
    setInputValue('');
  };

  return [inputValue, handleChange, clearInput];
};

export default useInputValue;
