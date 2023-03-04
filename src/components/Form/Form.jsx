import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FormEl, Label, Input, Button } from './Form.styled';

class Form extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { props, state, reset } = this;
    props.getData(state);
    reset()
  };
    
  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number} = this.state;

    return (
      <FormEl onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    );
  }
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
}

export default Form;
