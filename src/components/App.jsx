import { Box } from './Box/Box.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Title title={TITLES.form} />
      <ContactForm />
      <Title title={TITLES.contacts} />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
      <Toaster />
    </Box>
  );
};
