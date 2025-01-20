"use client";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Home() {
  const [color, setColor] = useState<string>("red");
  const [name, setName] = useState<string>("");

  // Type for the form submission handler
  const handleonSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert("Submitted successfully");
    setName("");
  };

  // Type for the input change handler
  const handleonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <div className="item">
        <h1>This is a new website</h1>
        <h1>Yes yes, this is a new website</h1>
        <h2>Hi what are you doing</h2>
        <h3>Nothing just chillin with your mum</h3>
        <h4>But your mum got my winni inside her</h4>
        <h5>Go away!!</h5>
        <h6>OKAY, WITH YOUR MUM</h6>
        <button
          style={{ backgroundColor: color }}
          onClick={() => {
            setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
          }}
        >
          Click Me
        </button>
        {color === "blue" ? <p>Button is clicked</p> : null}
        <a href="#">link1</a>
        <a href="#">link2</a>
        <h1>Form Submission</h1>
        <form onSubmit={handleonSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleonChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
