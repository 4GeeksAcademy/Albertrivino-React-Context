import React, { useContext, useEffect, Link } from 'react'
import Imagen from "../../img/image1.jpg"
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';


const ListContact = ({ name, phone, address, email, id }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/editContact/${id}`)
    }
    const {actions} = useContext(Context);
    const deleteContact = () => {
        actions.delContact(id);       
    }

    return (
        <div>
            <div className="card mb-0 mx-auto p-2" style={{ maxWidth: "1000px" }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                            src={Imagen}
                            className="img-fluid rounded-circle"
                            alt="..."
                            style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className='text-start'>
                                    <h4 className="card-title">{name}</h4>
                                    <p className="card-text">
                                        <i className="fa-solid fa-envelope"></i> {email}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-phone-flip"></i> {phone}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-location-dot"></i> {address}
                                    </p>
                                  
                                   
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <div className="px-4">
                                    <button onClick={handleEdit} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <i className="fa-solid fa-pencil"></i>
                                        </button>

                                    </div>
                                    <div className="px-2">
                                        <button onClick={deleteContact} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                        <i className="fa-solid fa-trash-can"></i>
                                         </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListContact;


