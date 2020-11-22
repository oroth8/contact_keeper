import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
        {
            type: "personal",
            id: "1",
            name: "Dean Bigdean",
            email: "dean@gmail.com",
            phone: "420-333-3333",

        },
        {
            type: "personal",
            id: "2",
            name: "Sabrina Buttface",
            email: "sabrina@gmail.com",
            phone: "111-222-3344",

        },
        {
            type: "professional",
            id: "3",
            name: "Carl Stinks",
            email: "carl@gmail.com",
            phone: "523-567-2345",

        },
        ]
    };
    const[state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    // delete contact

    // set current contact

    // clear current contact

    // update contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider value={{contacts: state.contacts}}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;