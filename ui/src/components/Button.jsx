import styled from 'styled-components';

function Button({name, city, setRec, setLoading}) {
  async function getRec(city) {
    setLoading(true);
    await fetch('/api/rec', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({city: city})
    })
    .then(r => {
      if(r.ok) {
        return r.json();
      }
      else {
        console.log('Oops! There was an issue', r);
      }
    })
    .then(rec => {
      setRec(rec)
      setLoading(false);
    })
  }

  return (
    <StyledButton onClick={()=> getRec(city)}>{name}</StyledButton>
  )
}

export default Button;

// must review this ... Can pare down?
const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px;
  height: 48px;
  margin: 0px 10px;
  outline: 0;
  border: 1px solid #373737;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
      padding: 13px 50px;
  }
`
