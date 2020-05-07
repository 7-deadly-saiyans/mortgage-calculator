import React from 'react';
const labels = [
  "Principal & Interest",
  "Property Taxes",
  "Home Insurance",
  "HOA",
  "Mortgage ins. & other"
];
const Table = ({elements}) => (
  <table className="AffordabilityTable">
    <thead>
      <tr>
        <th>Legend</th>
        <th>Expense</th>
        <th>Amount</th>
      </tr>
    </thead>

    <tbody>
      {elements && elements.map((e, i) => (
        <tr key={i}>
          <td><div className={"AffordabilityTableTitleDot color" + (i + 1)}></div></td>
          <td>{labels[i]}</td>
          <td>{e}</td>
        </tr>
      ))}
    </tbody>

    <tfoot>
      <tr>
        <td></td>
        <td>Total</td>
        <td><output name="totalMonthlyAmount"></output></td>
      </tr>
    </tfoot>
  </table>
);
export default Table;
