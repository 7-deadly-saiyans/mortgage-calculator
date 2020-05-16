import React from 'react';
import styled from 'styled-components';

export default ({elements, monthlyPayment}) => (
  <Figure>
    <Svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="12" fill="#fff" role="presentation">
      </circle>

      {elements && elements.map((e, i) => (
        <Circle color={i} key={i} cx="18" cy="18" r="16" fill="transparent" strokeWidth="3.8"
          strokeDasharray={e.value + ' ' + e.complement} strokeDashoffset={e.offset}>
        </Circle>
      ))}
    </Svg>

    <Figcaption>
      <h1>
        <Output name="MonthlyPayment">
          {monthlyPayment}
        </Output>
      </h1>

      <P>
        /month
      </P>
    </Figcaption>
  </Figure>
);

const Figure = styled.figure`
  width: 200px;
`;

const Svg = styled.svg`
  position: relative;
  top: 8px;
`;

const colors = [
  "rgb(5, 34, 134)",
  "rgb(0, 173, 187)",
  "rgb(194, 213, 0)",
  "rgb(250, 140, 104)",
  "rgb(206, 182, 255)"
];

const Circle = styled.circle`
  stroke: ${props => colors[props.color]}
`;

const Figcaption = styled.figcaption`
  position:relative;
  top: -140px;
  left: 83px;
`;

const Output = styled.output`
  font-family: monospace;
  font-size: -webkit-xxx-large;
  position: relative;
  right: 53px;
`;

const P = styled.p`
  position: relative;
  top: -10px;
`;
