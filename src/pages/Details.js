import React, { useState } from 'react';
import '../App.css';
import data from '../mock-data.json';

const Details = () => {

  const [contacts, setContacts] = useState(data);

    return (
      <div className="app-container">
        <form>
          <table>
            <thead>
              <tr>
                <th>Full Name/Pilnas Vardas</th>
                <th>Address/ Adresas</th>
                <th>Phone Number/Tel. Numeris</th>
                <th>Email/El. Paštas</th>
              </tr>
            </thead>
                
            <tbody>   
              {contacts.map((contact)=>
                (
                  <tr>
                    <td>{contact.fullName}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.email}</td>
                  </tr>
                ))}
             </tbody>
          </table>
        </form>
      </div>
    );
  }

  export default Details;