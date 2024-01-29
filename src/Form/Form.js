import React from "react";
import "./Form.css";

export default function Form(props) {
  const {fields, onSubmit, onInputChange} = props;

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <div className="row" key={field.name}>
            <div className="col-25">
              <label htmlFor={field.name}>{field.label}</label>
            </div>
            <div className="col-75">
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  onChange={onInputChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.label}
                  id={field.name}
                  name={field.name}
                  onChange={onInputChange}
                />
              )}
            </div>
          </div>
        ))}
        <div>
          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
