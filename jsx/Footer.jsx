import React from 'react';
import styled from 'styled-components';

export default ({zipCode}) => (
  <Footer>
    <Button type="button">
      Get Pre-Qualified
    </Button>

    or

    <Small>
      <A href={"/rate/" + zipCode}>
        See today&#39;s mortgage rates
      </A>
    </Small>
  </Footer>
);

const Footer = styled.footer`
  position: relative;
  float: right;
  top: -164px;
  right: 29%;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 120, 130);
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  padding: 8px 16px;
  border-color: transparent;
  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(0, 120, 130);
    border-color: rgb(0, 120, 130);
  }
`;

const Small = styled.small`
  width: 100%;
  display: inline-block;
`;

const A = styled.a`
  color: rgb(0, 120, 130);
  text-decoration: none;
`;
