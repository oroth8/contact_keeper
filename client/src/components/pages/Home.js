import React from 'react'
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFiler from '../contacts/ContactFilter'

export const Home = () => {
    return (
        <div className="grid-2">
            <div>
               <ContactForm/>
            </div>
            <div>
                <ContactFiler/>
                <Contacts/>
            </div>

        </div>
    )
}

export default Home;