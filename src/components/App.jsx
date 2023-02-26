import { Box } from './Box/Box.styled';
import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

const TITLES = {
  form: 'Phonebook',
  contacts: 'Contacts',
};

export const App = () => {
  return (
    <Box>
      <Title title={TITLES.form} />
      <ContactForm />
      <Title title={TITLES.contacts} />
      <Filter />
      <ContactsList />
    </Box>
  );
};
