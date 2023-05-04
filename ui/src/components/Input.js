import styled from 'styled-components';

function Input({placeholder}) {
  return (
    <StyledInput placeholder = {placeholder} />
  )
}

export default Input;

const StyledInput = styled.input`
  padding: 13px;
  border: 1px solid #373737;
  outline: 0;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  width: 20em;
`