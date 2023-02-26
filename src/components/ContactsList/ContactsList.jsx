import { List, Item } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
};
