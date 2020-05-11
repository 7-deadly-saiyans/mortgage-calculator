import React from 'react';
import {Fieldset, Legend, Label, TextInput, RangeInput} from './FormStyledElements.jsx';

export default ({format, homePrice, textHandler, rangeHandler}) => (
  <Fieldset>
    <Legend>
      Home Price
    </Legend>

    <Label>
      Home Price
    
      <TextInput
        type="text"
        value={format(homePrice)}
        onChange={textHandler}
      />
    </Label>
    
    <RangeInput
      type="range"
      aria-label="Home Price"
      step="10"
      min="0"
      max={Math.max(1500000, homePrice * 1.25)}
      value={homePrice}
      onChange={rangeHandler}
    />
  </Fieldset>
);
