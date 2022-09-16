import React, { useState } from 'react';
import '../App.css';
import data from '../mock-data.json';
import { Link } from 'react-router-dom';

const List = () => {

  const [contacts, setContacts] = useState(data);

    return (
      <div className="app-container">
        <form>
          <table>
            <thead>
              <tr>
                <th>Full Name/Pilnas Vardas</th>
                <th>Actions/Veiksmai</th>
              </tr>
            </thead>
                
            <tbody>   
              {contacts.map((contact)=>
                (
                  <tr>
                    <td>{contact.fullName}</td>
                    <td>
                      <Link to='/details'>
                        <button>
                          Go to Details/Išplėsti
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </form>
        <h3>
          <Link to='/record'><button> Add a new record/ Pridėti naują narį </button></Link>
          <Link to='/'><button> Reset to Home Page/ Grįžti į pradinį puslapį </button></Link>
        </h3>
  
      </div>
    );
  }

  export default List;