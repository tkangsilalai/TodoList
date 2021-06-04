import { createContext } from 'react';

const APIContext = createContext();

const APIProvider = (props) => {

    const domain = "http://206.189.89.204/app/no_auth/todos/";

    return (
        <APIContext.Provider value={[domain]}>
            {props.children}
        </APIContext.Provider>
    );
};

async function getNoAuth(domain) {
    const response = await fetch(domain, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    const data = response.json();
    return data;
}

async function postNoAuth(domain, item) {
    const response = await fetch(domain, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: item
        })
    })
    const data = response.json();
    return data;
}

async function putNoAuth(domain, item, _id) {
    const response = await fetch(domain+_id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: item
        })
    })
    const data = response.json();
    return data;
}

async function deleteNoAuth(domain, _id) {
    const response = await fetch(domain+_id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    const data = response.json();
    return data;
}

export { APIProvider, APIContext, getNoAuth, postNoAuth, putNoAuth, deleteNoAuth };