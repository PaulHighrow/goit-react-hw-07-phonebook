import PropTypes from 'prop-types';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';
import { Text, Button, ToastForm, ToastInput } from './Contact.styled';
import { Formik } from 'formik';
import { Error } from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'redux/selectors';

let schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name is too short!')
    .matches(
      /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/,
      'Name must not contain digits'
    )
    .required('Name is required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Please enter a valid number!'
    )
    .required('Number is required!'),
});

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success('Contact was deleted!');
  };

  const handleToastSubmit = values => {
    if (contacts.some(contact => contact.name === values.name)) {
      toast.error(`Sorry, ${values.name} is already in contacts.`);
      return;
    }
    const editedValues = {
      id: id,
      name: values.name,
      number: values.number,
    };
    dispatch(editContact(editedValues));
    toast.dismiss();
    toast.success('Contact successfully edited!');
  };

  const handleEdit = () => {
    const defaultValues = { name, number };

    toast(
      () => {
        return (
          <Formik
            initialValues={defaultValues}
            onSubmit={handleToastSubmit}
            validationSchema={schema}
          >
            <ToastForm>
              <Text> Okay, do your edits</Text>
              <ToastInput type="text" name="name" />
              <Error component="div" name="name" />
              <ToastInput type="tel" name="number" />
              <Error component="div" name="number" />
              <Button type="submit">Submit</Button>
            </ToastForm>
          </Formik>
        );
      },
      {
        duration: Infinity,
      }
    );
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
