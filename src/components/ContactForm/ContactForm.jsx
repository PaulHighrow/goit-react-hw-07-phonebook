import * as yup from 'yup';
import 'yup-phone';
import { Formik } from 'formik';
import { StyledForm, Label, Input, Error, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { toast } from 'react-hot-toast';
import { getContacts } from 'redux/selectors';

let schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      toast.error(`Sorry, ${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));
    toast.success('Contact successfully added!');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
