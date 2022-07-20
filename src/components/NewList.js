import React, { useState } from "react";

export default function NewList() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input);
    fetch("http://localhost:9000/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: input,
        // checked: false,
      }),
    }).then((res) => res.json());
  };

  return (
    <div className="new_list">
      <form action="">
        <label htmlFor="">Create a new checklist</label>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="new list"
        />

        <div>
          <button onClick={handleInput} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
