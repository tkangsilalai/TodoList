import { createContext } from 'react';

const AuthAPIContext = createContext();

const AuthAPIProvider = (props) => {

    const domain = "http://206.189.89.204/app/";

    return (
        <AuthAPIContext.Provider value={[domain]}>
            {props.children}
        </AuthAPIContext.Provider>
    );
};

async function login(domain) {
    const response = await fetch(domain + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: "tkangsilalai@gmail.com",
            password: "test1234"
        })
    })
    const data = response.json();
    return data;
}

async function postAuth(domain, item, token) {
    const response = await fetch(domain + "with_auth/todos/", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            title: item
        })
    })
    const data = response.json();
    return data;
}

async function putAuth(domain, item, _id, token) {
    const response = await fetch(domain+"with_auth/todos/"+_id, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({
            title: item
        })
    })
    const data = response.json();
    return data;
}

async function deleteAuth(domain, _id, token) {
    const response = await fetch(domain+"with_auth/todos/"+_id, {
        method: "DELETE",
        headers: { 
            "Content-Type": "application/json" ,
            "Authorization": "Bearer "+token
        },
    })
    const data = response.json();
    return data;
}

export { AuthAPIProvider, AuthAPIContext, login, postAuth, putAuth, deleteAuth};