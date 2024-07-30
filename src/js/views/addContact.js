import React from 'react'
import { Link } from "react-router-dom";

const AddContact = () => {
  return (

    <div className='bg-secondary-subtle py-3'>
      <div className='text-center'><h1>Add a new contact</h1></div>
      <form className='mx-5 px-5'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" placeholder='Full Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='Enter email' id="exampleInputEmail1"pattern=".+@example\.com" size="30" required  aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPhone" className="form-label">Phone</label>
          <input type="number" className="form-control" placeholder='Enter phone' id="exampleInputPhone" aria-describedby="phoneHelp" />
          <div id="phoneHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" placeholder='Enter Address' id="exampleInputAddress" aria-describedby="addressHelp" />
          <div id="addressHelp" className="form-text"></div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Save</button>
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