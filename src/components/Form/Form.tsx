import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {submitForm} from '../../store/contacts/contactsSlice';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {addContact, updateContact} from '../../store/contacts/contactsThunks';

const Form = ({isEdit, existingContact, isLoading}) => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState(existingContact);

  const changeContact = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const contactData = {
      ...contact,
    };

    dispatch(submitForm(contactData, isEdit));
  };

  const handleSubmit = () => {
    if (isEdit) {
      dispatch(updateContact(contact));
    } else {
      dispatch(addContact(contact));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>{isEdit ? 'Edit contact' : 'Add new contact'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={contact.name}
          onChange={changeContact}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          required
          type="number"
          name="phone"
          id="phone"
          className="form-control"
          value={contact.phone}
          onChange={changeContact}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={contact.email}
          onChange={changeContact}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          required
          type="url"
          name="photo"
          id="photo"
          className="form-control"
          value={contact.photo}
          onChange={changeContact}
        />
      </div>

      <button type="submit" className="btn btn-info mt-2" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Done' : 'Add'}
      </button>
    </form>
  );
};

export default Form;
