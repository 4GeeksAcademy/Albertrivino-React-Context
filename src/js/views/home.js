import React, { useContext, useEffect } from 'react'
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ListContact from "../component/listContact";
import { Navbar } from "../component/navbar";
import { Context } from '../store/appContext';

const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContact()
	}, [store])


	return (

		<div className="text-center mt-5">
			<Navbar />
			<h1>Contact list</h1>
			{store.contacts.map((value, index) => {

				return (
					<ListContact key={index} id={value.id} name={value.name} email={value.email} phone={value.phone} address={value.address} />
				)

			})}


			<p>
				{/* <img src={rigoImage} /> */}
			</p>
			{/* <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
		</div>
	)
};
export default Home