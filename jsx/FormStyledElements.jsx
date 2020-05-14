import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  float: left;
  width: 30%;
`;

export const Legend = styled.legend`
  display: none;
`;

export const Label = styled.label`
  position: relative;
  top: 6px;
  left: 1px;  
`;

export const TextInput = styled.input`
  float:right;
  width: 30%;
  border-radius: 6px;
  border: 1px solid silver;
  padding: 6px;
  font-family: sans-serif;
  font-size: small;
  color: #222;
  &:focus {
    outline: none;
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
  }
`;

export const LeftInput = styled(TextInput)`
  width: 15%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const RightInput = styled(TextInput)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const Select = styled.select`
  margin-top: 10px;
  height: 25px;
  display: block;
  &:focus {
    outline: none;
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
  }
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  height: 2px;
  outline: none;
  background: linear-gradient(
    to right,
    rgb(0, 120, 130) 0%,
    rgb(205, 209, 212) 100%
  );
  margin-top: 10px;
  width: 100%;
`;
