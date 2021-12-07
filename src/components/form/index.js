
import React, { useState } from "react";

import "./form.scss";

export default function Form(props) {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const methodHandle = (e) => {
    console.log(e.target.id);
    setMethod(e.target.id.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUrl(e.target.url.value);
    const formData = {
      method: method,
      url: url,
    };
    props.callApi(formData);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="url-label">
          <input
            name="url"
            type="text"
            placeholder="ENTER URL"
            data-testid="url"
            defaultValue="https://pokeapi.co/api/v2/pokemon"
          />
          <button type="submit" data-testid="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodHandle}>
            GET
          </span>
          <span id="post" onClick={methodHandle}>
            POST
          </span>
          <span id="put" onClick={methodHandle}>
            PUT
          </span>
          <span id="delete" onClick={methodHandle}>
            DELETE
          </span>
        </label>
      </form>
    </>
  );
}