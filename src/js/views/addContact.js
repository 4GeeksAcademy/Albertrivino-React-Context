import React, { useContext, useState, useEffect } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const createContact = { name, email, phone, address };
    actions.postContact(createContact);
    navigate("/");
};

  return (
   
      <div className='bg-primary-subtle py-3'>
          <div className='text-center'><h1>Add a new Contact</h1></div>
          <form className='mx-5 px-5' onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                      type="text"
                      value={name}
                      className="form-control"
                      placeholder='Full Name'
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                      type="email"
                      value={email}
                      className="form-control"
                      placeholder='Enter email'
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                      type="number"
                      value={phone}
                      className="form-control"
                      placeholder='Enter phone'
                      onChange={(e) => setPhone(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                      type="text"
                      value={address}
                      className="form-control"
                      placeholder='Enter Address'
                      onChange={(e) => setAddress(e.target.value)}
                  />
              </div>
              <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">Save Contact Edit</button>
              </div>
        {/* <p><a class="link-opacity-100-hover" href="#">or get back to contacts</a></p> */}
        <Link to="/">
          <span className="navbar-brand mb-0 h1">or get back to contacts</span>
        </Link>

      </form>

    </div>

  )
}

export default AddContact