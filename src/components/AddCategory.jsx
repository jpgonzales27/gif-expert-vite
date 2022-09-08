import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //   const onInputChange = (event) => {
  const onInputChange = ({ target }) => {
    // desctructurando el target del event
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Buscar Gifs"
        value={inputValue}
        // onChange={( event)=> onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};
