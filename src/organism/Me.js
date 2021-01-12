import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import "../style/sass/_me.scss";

const Me = () => {
  const [textarea, setTextArea] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    formValidation();
    setTextArea("");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  const handleTextAreaChange = (e) => {
    setMessage("");
    setTextArea(e.target.value);
  };
  const formValidation = () => {
    textarea.length > 10 && textarea.indexOf("@") === -1
      ? setMessage("Form sent")
      : setMessage(
          "The message cannot be shorter than 10 characters and cannot contain @"
        );
  };
  return (
    <div className="me">
      <h1 className="hMe">Write a message:</h1>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit} className="formMe" noValidate>
        <textarea
          onChange={handleTextAreaChange}
          className="formMe__textarea"
          placeholder="Write here."
          value={textarea}
        />
        <button className="formMe__button" type="submit">
          Send a message
        </button>
      </form>
      <Prompt when={textarea ? true : false} message="You haven't sent the form." />
    </div>
  );
};

export default Me;
