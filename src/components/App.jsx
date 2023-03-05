import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { Container } from 'components/App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contact')) ?? [];
  });
  const [filterLabel, setFilterLabel] = useState('');

  const getDataOnSubmit = data => {
    const checkName = contacts.find(({ name }) => name === data.name);
    setContacts(() => {
      if (checkName) {
        alert(`${checkName.name} is already in contacts.`);
        return contacts;
      }
      const newContactData = {
        id: nanoid(),
        ...data,
      };
      return [newContactData, ...contacts];
    });
  };

  const filterContacts = () => {
    const lowerCase = filterLabel.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerCase)
    );
    return visibleContacts;
  };

  const deleteContact = deleteId => {
    setContacts(prevState => prevState.filter(c => c.id !== deleteId));
  };

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const filterContactsList = filterContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form getData={getDataOnSubmit} />
      <h2>Contacts</h2>
      <Filter
        filter={filterLabel}
        onChange={e => {
          setFilterLabel(e.currentTarget.value);
        }}
      />
      <Contacts
        contactsList={filterContactsList}
        deleteContact={deleteContact}
      />
    </Container>
  );
};

App.propTypes = {
  filterContacts: PropTypes.func,
  getDataOnSubmit: PropTypes.func,
  changeFilter: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default App;
