import React from "react";
import { Link } from 'react-router-dom';

const ReadOnlyRow = ( {contact, handleEditClick, handleDeleteClick } ) =>
{
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>
                <Link to='/details'>
                    <button>
                        Go to Details/Išplėsti
                    </button>
                </Link>
            </td>
            {/*
            <td>
                <button 
                    type='button' 
                    onClick={(event)=> handleEditClick(event,contact)}
                >
                    Edit/Keisti turinį
                </button>
                <button 
                    type='button'
                    onClick={() => handleDeleteClick(contact.id)}
                >
                    Delete/Ištrinti eilutę
                </button>
            </td>
             */}
        </tr>
    );
};

export default ReadOnlyRow;