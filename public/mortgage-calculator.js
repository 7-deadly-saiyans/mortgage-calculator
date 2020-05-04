class MortgageCalculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('rendered');
    return React.createElement(
      "section",
      { id: "mortgage-calculator", role: "application" },
      React.createElement(
        "header",
        null,
        React.createElement(
          "h3",
          null,
          "Affordability"
        ),
        React.createElement(
          "h4",
          null,
          "Calculate your monthly mortgage payments"
        ),
        React.createElement(
          "h5",
          null,
          "Your est. payment: ",
          React.createElement(
            "output",
            { name: "monthlyPayment" },
            "$2,106"
          ),
          "/month"
        )
      ),
      React.createElement(
        "form",
        { id: "AffordabilityInputControls" },
        React.createElement(
          "fieldset",
          { id: "HomePrice" },
          React.createElement(
            "legend",
            null,
            "Home Price"
          ),
          React.createElement(
            "label",
            { htmlFor: "HomePriceInput" },
            "Home Price"
          ),
          React.createElement("input", { "class": "textInput", id: "HomePriceInput", type: "text", defaultValue: "$265,015" }),
          React.createElement("input", { "class": "range", type: "range", min: "0", max: "1500000", step: "10", "aria-label": "Home Price", defaultValue: "265015" })
        ),
        React.createElement(
          "fieldset",
          { id: "DownPayment" },
          React.createElement(
            "legend",
            null,
            "Down Payment"
          ),
          React.createElement(
            "label",
            { htmlFor: "DownPaymentInput" },
            "Down Payment"
          ),
          React.createElement("input", { "class": "textInput rightSplit", id: "DownPaymentInput", type: "text", defaultValue: "$53,003" }),
          React.createElement("input", { "class": "textInput leftSplit", id: "DownPaymentPercentage", "aria-label": "Down Payment Percentage", type: "text", defaultValue: "20%" }),
          React.createElement("input", { "class": "range", type: "range", min: "0", max: "30", step: "1", "aria-label": "Down Payment", defaultValue: "20" })
        ),
        React.createElement(
          "fieldset",
          { id: "InterestRate" },
          React.createElement(
            "legend",
            null,
            "Interest Rate"
          ),
          React.createElement(
            "label",
            { htmlFor: "InterestRateInput" },
            "Interest Rate"
          ),
          React.createElement("input", { "class": "textInput", id: "InterestRateInput", type: "text", defaultValue: "3.93%" }),
          React.createElement("input", { "class": "range", type: "range", min: "0", max: "6.5", step: "0.1", "aria-label": "Interest Rate", defaultValue: "3.932" })
        ),
        React.createElement(
          "fieldset",
          { id: "LoanType" },
          React.createElement(
            "legend",
            null,
            "Loan Type"
          ),
          React.createElement(
            "label",
            { htmlFor: "LoanTypeInput" },
            "Loan Type"
          ),
          React.createElement(
            "select",
            { id: "LoanTypeInput" },
            React.createElement(
              "optgroup",
              { label: "Standard" },
              React.createElement(
                "option",
                { value: "30-year fixed" },
                "30-year fixed"
              ),
              React.createElement(
                "option",
                { value: "20-year fixed" },
                "20-year fixed"
              ),
              React.createElement(
                "option",
                { value: "15-year fixed" },
                "15-year fixed"
              ),
              React.createElement(
                "option",
                { value: "10-year fixed" },
                "10-year fixed"
              )
            ),
            React.createElement(
              "optgroup",
              { label: "FHA" },
              React.createElement(
                "option",
                { value: "FHA 30-year fixed" },
                "FHA 30-year fixed"
              ),
              React.createElement(
                "option",
                { value: "FHA 15-year fixed" },
                "FHA 15-year fixed"
              )
            ),
            React.createElement(
              "optgroup",
              { label: "VA" },
              React.createElement(
                "option",
                { value: "VA 30-year fixed" },
                "VA 30-year fixed"
              ),
              React.createElement(
                "option",
                { value: "VA 15-year fixed" },
                "VA 15-year fixed"
              )
            )
          )
        )
      ),
      React.createElement(
        "table",
        { "class": "AffordabilityTable" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Legend"
            ),
            React.createElement(
              "th",
              null,
              "Expense"
            ),
            React.createElement(
              "th",
              null,
              "Amount"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              " ",
              React.createElement("div", { "class": "AffordabilityTableTitleDot color1" }),
              " "
            ),
            React.createElement(
              "td",
              null,
              " Principal & Interest "
            ),
            React.createElement(
              "td",
              null,
              " $1,004 "
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              " ",
              React.createElement("div", { "class": "color2 AffordabilityTableTitleDot" }),
              " "
            ),
            React.createElement(
              "td",
              null,
              " Property Taxes "
            ),
            React.createElement(
              "td",
              null,
              " $148 "
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              " ",
              React.createElement("div", { "class": "color3 AffordabilityTableTitleDot" }),
              " "
            ),
            React.createElement(
              "td",
              null,
              " Home Insurance "
            ),
            React.createElement(
              "td",
              null,
              " $75 "
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              " ",
              React.createElement("div", { "class": "color4 AffordabilityTableTitleDot" }),
              " "
            ),
            React.createElement(
              "td",
              null,
              " HOA "
            ),
            React.createElement(
              "td",
              null,
              " $879 "
            )
          ),
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              null,
              " ",
              React.createElement("div", { "class": "color5 AffordabilityTableTitleDot" }),
              " "
            ),
            React.createElement(
              "td",
              null,
              " Mortgage ins. & other "
            ),
            React.createElement(
              "td",
              null,
              " $0 "
            )
          )
        ),
        React.createElement(
          "tfoot",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("td", null),
            React.createElement(
              "td",
              null,
              "Total"
            ),
            React.createElement(
              "td",
              null,
              React.createElement("output", { name: "totalMonthlyAmount" })
            )
          )
        )
      ),
      React.createElement(
        "figure",
        { "class": "DonutChartGraphContainer" },
        React.createElement(
          "svg",
          { viewBox: "0 0 36 36" },
          React.createElement("circle", { cx: "18", cy: "18", r: "12", fill: "#fff", role: "presentation" }),
          React.createElement("circle", { cx: "18", cy: "18", r: "16", fill: "transparent", stroke: "rgb(5, 34, 134)", "stroke-width": "3.8",
            "stroke-dasharray": "47.673314339981005 52.326685660018995", "stroke-dashoffset": "25" }),
          React.createElement("circle", { cx: "18", cy: "18", r: "16", fill: "transparent", stroke: "rgb(0, 173, 187)", "stroke-width": "3.8",
            "stroke-dasharray": "7.027540360873694 92.9724596391263", "stroke-dashoffset": "77.326685660019" }),
          React.createElement("circle", { cx: "18", cy: "18", r: "16", fill: "transparent", stroke: "rgb(194, 213, 0)", "stroke-width": "3.8",
            "stroke-dasharray": "3.561253561253561 96.43874643874643", "stroke-dashoffset": "70.2991452991453" }),
          React.createElement("circle", { cx: "18", cy: "18", r: "16", fill: "transparent", stroke: "rgb(250, 140, 104)", "stroke-width": "3.8",
            "stroke-dasharray": "41.73789173789174 58.26210826210826", "stroke-dashoffset": "66.73789173789174" })
        ),
        React.createElement(
          "figcaption",
          { "class": "DonutChartLabelContainer" },
          React.createElement(
            "h1",
            null,
            React.createElement(
              "output",
              { name: "MonthlyPayment", "class": "DonutChartLabelAmount" },
              "$2,106"
            )
          ),
          React.createElement(
            "p",
            { "class": "DonutChartLabelUnit" },
            "/month"
          )
        )
      ),
      React.createElement(
        "footer",
        { "class": "AffordabilityTableButtonContainer" },
        React.createElement(
          "button",
          { type: "button" },
          "Get Pre-Qualified"
        ),
        "or",
        React.createElement(
          "small",
          null,
          React.createElement(
            "a",
            { href: "/rates" },
            " See today's mortgage rates "
          )
        )
      )
    );
  }
}
