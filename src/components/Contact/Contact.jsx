import PropTypes from 'prop-types';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contactsSlice';
import { Text, Button } from './Contact.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact was deleted!');
  };

  const handleEdit = () => {
    toast.success('Okay, do your edits');
    dispatch(editContact(id));
  };

  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
      <Button type="button" onClick={handleEdit}>
        Edit
      </Button>
      <Toaster />
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
