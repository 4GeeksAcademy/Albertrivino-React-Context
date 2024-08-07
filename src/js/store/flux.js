const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            isEditContact: false,
            userCreated: false,
        },
        actions: {
            getContact: () => {
                fetch("https://playground.4geeks.com/contact/agendas/albertrivino/contacts", {
                    method: "GET",
                })
                    .then(resp => {
                        if (!resp.ok) {
                            if (resp.status === 404) {
                                return getActions().createUser();
                            }
                            throw new Error("404 Not Found");
                        }
                        return resp.json();
                    })
                    .then(data => {
                        setStore({ contacts: data.contacts });
                    })
                    .catch(error => {
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
                    .then(resp => resp.json())
                    .then(updatedContact => {
                        const store = getStore();
                        const updatedContacts = store.contacts.map(contact =>
                            contact.id === parseInt(id) ? updatedContact : contact
                        );
                        setStore({ contacts: updatedContacts, isEditContact: false });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            postContact: (createContact) => {
                fetch('https://playground.4geeks.com/contact/agendas/albertrivino/contacts', {
                    method: "POST",
                    body: JSON.stringify(createContact),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => {
                        if (!resp.ok) {
                            throw new Error("Error creating contact");
                        }
                        return resp.json();
                    })
                    .then(newContact => {
                        const store = getStore();
                        setStore({ contacts: [...store.contacts, newContact], isEditContact: false });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            delContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/albertrivino/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then(resp => {
                        if (resp.ok) {
                            const store = getStore();
                            const updatedContacts = store.contacts.filter(contact => contact.id !== id);
                            setStore({ contacts: updatedContacts });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            createNewContactList: () => {
                const newList = [];
                setStore({ contacts: newList });
                console.log("Nueva lista de contactos creada.");
            },
            createUser: () => {
                fetch('https://playground.4geeks.com/contact/agendas/albertrivino', {
                    method: "POST",
                    body: JSON.stringify([]),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => {
                        if (resp.ok) {
                            setStore({ userCreated: true });
                            console.log("Usuario creado exitosamente.");
                            return getActions().createNewContactList();
                        } else {
                            throw new Error("Error creando usuario");
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    };
};

export default getState;
