import React from 'react';
const Footer = ({zipCode}) => (
  <footer className="AffordabilityTableButtonContainer">
    <button type="button">Get Pre-Qualified</button>
    or
    <small><a href={"/rate/" + zipCode}> See today&#39;s mortgage rates </a></small>
  </footer>
);
export default Footer;
