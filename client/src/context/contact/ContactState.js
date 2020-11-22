import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
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
        ],
        current: null,
        filtered: null
    };
    const[state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // delete contact
    const deleteContact = id => {
        
        dispatch({type: DELETE_CONTACT, payload: id});
    }

    // set current contact
    const setCurrent = contact => {
        
        dispatch({type: SET_CURRENT, payload: contact});
    }
    // clear current contact
    const clearCurrent = () => {
        
        dispatch({type: CLEAR_CURRENT});
    }
    // update contact
    const updateContact = contact => {
        
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }

    // filter contacts
    const filterContacts = text => {
        
        dispatch({type: FILTER_CONTACTS, payload: text});
    }

    // clear filter
    const clearFilter = () => {
        
        dispatch({type: CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            clearFilter,
            filterContacts
            }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;