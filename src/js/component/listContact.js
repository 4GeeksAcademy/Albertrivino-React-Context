import React, { useContext, useEffect } from 'react'
import Imagen from "../../img/images1.jpeg"

import { useNavigate } from 'react-router-dom';

const ListContact = ({ name, phone, address, email,id }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
      navigate(`/editContact/${id}`)
      }


    return (
        <div>
            <div className="card mb-0 mx-auto p-2" style={{ maxWidth: "1000px" }}>
                <div className="row g-0">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
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
                                <div>
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">
                                        <i className="fa-solid fa-location-dot"></i> {address}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-phone-flip"></i> {phone}
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-envelope"></i> {email}
                                    </p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="px-4">
                                    <button onClick={handleEdit} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <i className="fa-solid fa-pencil"></i>
                                        </button>

                                    </div>
                                    <div className="px-2">
                                        <i className="fa-solid fa-trash-can"></i>
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


