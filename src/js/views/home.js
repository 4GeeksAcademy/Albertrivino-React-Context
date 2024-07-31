import React, { useContext, useEffect } from 'react';
import "../../styles/home.css";
import ListContact from "../component/listContact";
import { Navbar } from "../component/navbar";
import { Context } from '../store/appContext';

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContact();
    }, []);

    const handleCreateUser = () => {
        actions.createUser();
    };

    return (
        <div className="text-center mt-5">
            <Navbar />
            <h1 className='display-3'>Contact List</h1>
            {store.contacts.length === 0 && !store.userCreated ? (
                <div>
                    <p>No contacts found. Create a new user to start adding contacts.</p>
                    <button className="btn btn-primary" onClick={handleCreateUser}>Create User</button>
                </div>
            ) : store.contacts.length === 0 && store.userCreated ? (
                <div>
                    <p>User created successfully. No contacts available. Start adding new contacts.</p>
                </div>
            ) : (
                store.contacts.map((value, index) => (
                    <ListContact key={index} id={value.id} name={value.name} email={value.email} phone={value.phone} address={value.address} />
                ))
            )}
        </div>
    );
};

export default Home;
