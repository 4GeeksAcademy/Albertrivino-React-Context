
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContact: ()=>{
			fetch("https://playground.4geeks.com/contact/agendas/albertrivino/contacts",{
				method:"GET",
			})
			.then(resp=>{
				return resp.json();
			})
			.then(data => {
				setStore({ contacts: data.contacts});
				console.log(data.contacts);
			})

			.catch(error =>{
				console.log(error);
			});
				
			},
			putContact: (id, editContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/albertrivino/contacts/${id}`, {
				  method: "PUT",
				  body: JSON.stringify(editContact),
				  headers: {
					"Content-Type": "application/json"
				  }
				})
				.then(resp => {
				  return resp.json();
				})
				.then(updatedContact => {
				  const store = getStore();
				  const updatedContacts = store.contacts.map(contact => 
					contact.id === id ? { ...contact, ...updatedContact } : contact
				  );
				  setStore({ contacts: updatedContacts });
				})
				.catch(error => {
				  console.log(error);
				});
			}
		

			// postContact:()=>{
			// 	fetch('https://playground.4geeks.com/contact/agendas/albertrivino/contacts', {
			// 		method: "POST",
			// 		body: JSON.stringify([]),
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	})
			// 		.then(resp => {
			// 			if (!resp.ok) {
			// 				throw new Error("Error creating list");
			// 			}
			// 			return resp.json();
			// 		})
			// 		.then(data => {
			// 			console.log("List created:", data);
			// 			setTodo([]);
			// 		})
			// 		.catch(error => {
			// 			// Manejo de errores
			// 			console.log(error);
			// 		});
			// },
			// delContact: ()=>{
			// 	fetch(`https://playground.4geeks.com/contact/agendas/albertrivino/contacts/${id}`, {
			// 		method: "DELETE",
			// 	})
			// 		.then(resp => {
			// 			if (resp.ok) {
			// 				setTodo(updatedTodos);
			// 			}
			// 			return resp.text();
			// 		})
			// 		.then(data =>
			// 			console.log(data)
			// 		).catch(error => {
			// 			// Manejo de errores
			// 			console.log(error);
			// 		});

			// }
		

		}
	};
};

export default getState;
