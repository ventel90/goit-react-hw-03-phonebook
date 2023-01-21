import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
  /* padding: 20px; */
  width: 500px;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: #222222;
`;

export const Input = styled.input`
  padding: 5px 10px;
  font-size: 24px;
  color: #212121;
  background-color: transparent;
  border-radius: 5px;
`;

export const Btn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 1em;
  font-weight: 500;
  color: #1b50ee;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #1b50ee;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--bg);
    background-color: #1b50ee;
  }
`;