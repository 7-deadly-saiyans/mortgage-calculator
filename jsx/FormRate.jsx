import React from 'react';
import {Fieldset, Legend, Label, TextInput, RangeInput} from './FormStyledElements.jsx';

export default ({interestRate, handleRate}) => (
  <Fieldset>
    <Legend>
      Interest Rate
    </Legend>

    <Label>
      Interest Rate

      <TextInput
        type="text"
        value={'' + interestRate + '%'}
        onChange={handleRate}
      />
    </Label>

    <RangeInput
      type="range"
      aria-label="Interest Rate"
      min="0"
      max="6.5"
      step="0.1"
      value={interestRate}
      onChange={handleRate}
    />
  </Fieldset>
);
