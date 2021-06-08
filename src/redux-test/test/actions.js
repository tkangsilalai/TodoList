import * as TYPES from './types';

export const login = () => async (dispatch) => {
    dispatch({ type: TYPES.LOGIN_REQ });
    try {
        const response = await fetch('http://206.189.89.204/app/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: "tkangsilalai@gmail.com",
                password: "test1234"
            })
        });
        if (response.ok) {
            const data = await response.json();
            dispatch({ type: TYPES.LOGIN_SUCCESS, payload: data.token });
        }
    } catch (error) {
        dispatch({ type: TYPES.LOGIN_FAIL, payload: error });
    }
}

export const get = () => async (dispatch) => {
    dispatch({ type: TYPES.GET_REQ });
    try {
        const response = await fetch("http://206.189.89.204/app/no_auth/todos/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            const data = await response.json();
            dispatch({ type: TYPES.GET_SUCCESS, payload: data.data });
        }
    } catch (error) {
        dispatch({ type: TYPES.GET_FAIL, payload: error });
    }
}

export const post = (token, item) => async (dispatch) => {
    dispatch({ type: TYPES.POST_REQ });
    try {
        const response = await fetch("http://206.189.89.204/app/with_auth/todos/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                title: item
            })
        });
        if (response.ok) {
            const data = await response.json();
            dispatch({ type: TYPES.POST_SUCCESS, payload: data.data });
        }
    } catch (error) {
        dispatch({ type: TYPES.POST_FAIL, payload: error });
    }
}

export const del = (token, _id) => async (dispatch) => {
    dispatch({ type: TYPES.DELETE_REQ });
    try {
        const response = await fetch("http://206.189.89.204/app/with_auth/todos/" + _id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        if (response.ok) {
            dispatch({ type: TYPES.DELETE_SUCCESS, payload: _id });
        }
    } catch (error) {
        dispatch({ type: TYPES.DELETE_FAIL, payload: error });
    }
}

export const update = (token, _id, item) => async (dispatch) => {
    dispatch({ type: TYPES.UPDATE_REQ });
    try {
        const response = await fetch("http://206.189.89.204/app/with_auth/todos/" + _id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                title: item
            })
        });
        if (response.ok) {
            const data = await response.json();
            dispatch({ type: TYPES.UPDATE_SUCCESS, payload: data.data });
        }
    } catch (error) {
        dispatch({ type: TYPES.UPDATE_FAIL, payload: error });
    }
}