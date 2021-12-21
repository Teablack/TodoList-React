import { useState } from "react";

export default function NewItem(props) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (term === "") return;
    props.onFormSubmit(term);
    setTerm("");
  }

  return (
    <div className="newItem">
      <form onSubmit={handleSubmit}>
        <input
          className="myInput"
          type="text"
          placeholder="Enter Item"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="myButton">Add</button>
      </form>
    </div>
  );
}
