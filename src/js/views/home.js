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

    return (
        <div className="text-center mt-5">
            <Navbar />
            <h1 className='display-3'>Contact List</h1>
            {store.contacts.map((value, index) => (
                    <ListContact key={index} id={value.id} name={value.name} email={value.email} phone={value.phone} address={value.address} />
                ))
            }
        </div>
    );
};

export default Home;
