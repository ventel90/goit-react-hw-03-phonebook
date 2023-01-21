import styled from '@emotion/styled';

export const Contacts = styled.ul`
  list-style: none;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactItem = styled.li`
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  color: #212121;
  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;
  font-weight: 500;
  font-size: 22px;
  color: #1b50ee;
  flex-basis: 33.333%;
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
