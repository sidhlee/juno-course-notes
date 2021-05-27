import useInputValue from './useInputValue';

const FavoriteFriendForm = () => {
  const [name, handleNameChange, clearNameInput] = useInputValue();
  const [email, handleEmailChange, clearEmailInput] = useInputValue();
  const [phone, handlePhoneChange, clearPhoneInput] = useInputValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic here
    // reset form on submit
    clearNameInput();
    clearEmailInput();
    clearPhoneInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">What is your favorite Friend?</label>
      <input id="name" type="text" value={name} onChange={handleNameChange} />
      <label htmlFor="email">What is your favorite Friend?</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="phone">What is your favorite Friend?</label>
      <input
        id="phone"
        type="text"
        value={phone}
        onChange={handlePhoneChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FavoriteFriendForm;
