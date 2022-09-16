import React, {useState} from "react";
import {nanoid} from 'nanoid';
import data from '../mock-data.json';

const Record = ({contact}) => {

  const [contacts, setContacts] = useState(data);

  const [addFormData, setAddFormData] = useState(
    {
      fullName : '',
      address : '',
      phoneNumber : '',
      email : ''
    }
  )

  const handleAddFormChange = (event) =>
  {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};

    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (event) =>
  {
    event.preventDefault();

    const newContact = {
      id : nanoid(),
      fullName : addFormData.fullName,
      address : addFormData.address,
      phoneNumber : addFormData.phoneNumber,
      email : addFormData.email
    }

    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  }

    return(
    <div>
      <h1>New Record page worked</h1>
        <h2>Add a Contact/ Pridėti narį</h2>
          <form onSubmit={handleAddFormSubmit}> 
          {/*Input for the full name. The onChange parameter guides to the function that updates the state changes in the form. */}
          <input
            type = 'text'
            name = 'fullName'
            required = 'required'
            placeholder = 'Enter a name for a new contact...'
            onChange = {handleAddFormChange} 
          />
          {/*Input for the address */}
          <input
            type = 'text'
            name = 'address'
            required = 'required'
            placeholder = 'Enter the address for a new contact...'
            onChange = {handleAddFormChange}
          />
          {/*Input for the phone number */}
          <input
            type = 'text'
            name = 'phoneNumber'
            required = 'required'
            placeholder = 'Enter the phone number of a new contact...'
            onChange = {handleAddFormChange}
          />
          {/*Input for the email address */}
          <input
            type = 'email'
            name = 'email'
            required = 'required'
            placeholder = 'Enter the email address of a new contact...'
            onChange = {handleAddFormChange}
          />
          <button type='submit'>
            Add/Pridėti
          </button>
        </form>
    </div>
  )};

export default Record;