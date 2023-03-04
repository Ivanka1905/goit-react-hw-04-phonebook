import PropTypes from 'prop-types';
import { ListItem, Button, Span } from './ContactItem.styled';

const ContactItem = ({ name, number, deleteContact, id }) => {
  return (
    <ListItem>
      <span>
        &#9900; {name}: <Span>{number}</Span>
      </span>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
  id: PropTypes.string,
};

export default ContactItem;
