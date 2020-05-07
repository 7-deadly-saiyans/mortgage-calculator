import React from 'react';
const FormPrice = ({format, homePrice, textHandler, rangeHandler}) => (
  <fieldset id="HomePrice">
    <legend>
      Home Price
    </legend>

    <label htmlFor="HomePriceInput">
      Home Price
    </label>
    
    <input
      type="text"
      id="HomePriceInput"
      className="textInput"
      value={format(homePrice)}
      onChange={textHandler}
    />
    
    <input
      type="range"
      className="range"
      aria-label="Home Price"
      step="10"
      min="0"
      max={Math.max(1500000, homePrice * 1.25)}
      value={homePrice}
      onChange={rangeHandler}
    />
  </fieldset>
);
export default FormPrice;
