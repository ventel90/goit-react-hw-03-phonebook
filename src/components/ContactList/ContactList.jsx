import React from "react";
import PropTypes from 'prop-types';
import { Contacts, ContactItem, Name, Number, Btn } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Contacts>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <Btn onClick={() => onDeleteContact(id)}>Delete</Btn>
      </ContactItem>
    ))}
  </Contacts>
);

export default ContactList

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
