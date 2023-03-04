import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
