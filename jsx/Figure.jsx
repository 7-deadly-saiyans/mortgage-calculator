import React from 'react';
const Figure = ({elements, monthlyPayment}) => (
  <figure className="DonutChartGraphContainer">
    <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="12" fill="#fff" role="presentation">
      </circle>
      {elements && elements.map((e, i) => (
        <circle className={"color" + (i + 1)} key={i} cx="18" cy="18" r="16" fill="transparent" strokeWidth="3.8"
          strokeDasharray={e.value + ' ' + e.complement} strokeDashoffset={e.offset}>
        </circle>
      ))}
    </svg>

    <figcaption className="DonutChartLabelContainer">
      <h1>
        <output name="MonthlyPayment" className="DonutChartLabelAmount">
          {monthlyPayment}
        </output>
      </h1>
      <p className="DonutChartLabelUnit">/month</p>
    </figcaption>
  </figure>
);
export default Figure;
