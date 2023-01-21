import React from 'react';
import {Wrapper, Label, Input} from './FilterContacts.styled'
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label>
      Filter: {' '}
      <Input
        type="text"
        value={value}
        onChange={onChange}
      />
    </Label>
  </Wrapper>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
