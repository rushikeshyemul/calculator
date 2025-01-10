import React, { useState } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      setValue(eval(value).toString());
    } catch (e) {
      setValue("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="heading">
          <h1>Calculator</h1>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleClear} className="button top-button">
            AC
          </button>
          <button onClick={handleDelete} className="button top-button">
            DE
          </button>
          <button onClick={handleClick} value="." className="button top-button">
            .
          </button>
          <button
            onClick={handleClick}
            value="/"
            className="button operator-button"
          >
            /
          </button>
          <button onClick={handleClick} value="7" className="button">
            7
          </button>
          <button onClick={handleClick} value="8" className="button">
            8
          </button>
          <button onClick={handleClick} value="9" className="button">
            9
          </button>
          <button
            onClick={handleClick}
            value="*"
            className="button operator-button"
          >
            *
          </button>
          <button onClick={handleClick} value="4" className="button">
            4
          </button>
          <button onClick={handleClick} value="5" className="button">
            5
          </button>
          <button onClick={handleClick} value="6" className="button">
            6
          </button>
          <button
            onClick={handleClick}
            value="-"
            className="button operator-button"
          >
            -
          </button>
          <button onClick={handleClick} value="1" className="button">
            1
          </button>
          <button onClick={handleClick} value="2" className="button">
            2
          </button>
          <button onClick={handleClick} value="3" className="button">
            3
          </button>
          <button
            onClick={handleClick}
            value="+"
            className="button operator-button"
          >
            +
          </button>
          <button
            onClick={handleClick}
            value="0"
            className="button zero-button"
          >
            0
          </button>
          <button
            onClick={handleClick}
            value="00"
            className="button zero-button"
          >
            00
          </button>
          <button onClick={handleEquals} className="button equal-button">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
