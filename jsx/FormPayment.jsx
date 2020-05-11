import React from 'react';
import {Fieldset, Legend, Label, LeftInput, RightInput, RangeInput} from './FormStyledElements.jsx';

export default ({format, downPayment, downPaymentPercent, textHandler, textHandlerPercent, rangeHandler}) => (
  <Fieldset>
    <Legend>
      Down Payment
    </Legend>

    <Label>
      Down Payment

      <RightInput
        type="text"
        value={format(downPayment)}
        onChange={textHandler}
      />
    </Label>

    <LeftInput
      type="text"
      aria-label="Down Payment Percentage"
      value={'' + downPaymentPercent + '%'}
      onChange={textHandlerPercent}
    />

    <RangeInput
      type="range"
      aria-label="Down Payment"
      min="0"
      max="30"
      step="1"
      value={downPaymentPercent}
      onChange={rangeHandler}
    />
  </Fieldset>
);
