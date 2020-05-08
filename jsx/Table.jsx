import React from 'react';
import styled from 'styled-components';

const labels = [
  "Principal & Interest",
  "Property Taxes",
  "Home Insurance",
  "HOA",
  "Mortgage ins. & other"
];

const styledTable = ({elements}) => (
  <Table>
    <Thead>
      <tr>
        <th>Legend</th>
        <th>Expense</th>
        <th>Amount</th>
      </tr>
    </Thead>

    <tbody>
      {elements && elements.map((e, i) => (
        <tr key={i}>
          <Td><Div color={i}></Div></Td>
          <Td>{labels[i]}</Td>
          <Td>{e}</Td>
        </tr>
      ))}
    </tbody>

    <Tfoot>
      <tr>
        <td></td>
        <td>Total</td>
        <td><output name="totalMonthlyAmount"></output></td>
      </tr>
    </Tfoot>
  </Table>
);

const Table = styled.table`
  font-size: inherit;
  color: #333;
  position: relative;
  top: -36px;
  float: right;
  width: 66%;
  margin-top: 50px;
`;

const Thead = styled.thead`
  display:none;
`;

const Tfoot = styled.tfoot`
  display:none;
`;

const Td = styled.td`
  &:last-child {
    text-align: right;
  }
  &:first-child {
    width: 20px;
  }
`;

const colors = [
  'rgb(5, 34, 134)',
  'rgb(0, 173, 187)',
  'rgb(194, 213, 0)',
  'rgb(250, 140, 104)',
  'rgb(206, 182, 255)'
];

const Div = styled.div`
  border-radius: 8px;
  width: 16px;
  height: 16px;
  background-color: ${props => colors[props.color]}; 
`;

export default styledTable;
