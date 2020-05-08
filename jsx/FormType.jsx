import React from 'react';
import {Fieldset, Legend, Label, Select} from './FormStyledElements.jsx';

export default ({handler}) => (
  <Fieldset>
    <Legend>
      Loan Type
    </Legend>

    <Label>
      Loan Type

      <Select
        onChange={handler} >

        <optgroup label="Standard">
          <option value="30-year fixed">30-year fixed</option>
          <option value="20-year fixed">20-year fixed</option>
          <option value="15-year fixed">15-year fixed</option>
          <option value="10-year fixed">10-year fixed</option>
        </optgroup>

        <optgroup label="FHA">
          <option value="FHA 30-year fixed">FHA 30-year fixed</option>
          <option value="FHA 15-year fixed">FHA 15-year fixed</option>
        </optgroup>

        <optgroup label="VA">
          <option value="VA 30-year fixed">VA 30-year fixed</option>
          <option value="VA 15-year fixed">VA 15-year fixed</option>
        </optgroup>
      </Select>
    </Label>
  </Fieldset>
);
