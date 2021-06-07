export const get = mapData => {
    return{
        type: 'GET',
        payload: mapData
    };
};
export const update = () => {
    return{
        type: 'UPDATE'
    };
};
export const del = () => {
    return{
        type: 'DELETE'
    };
};
export const post = () => {
    return{
        type: 'POST'
    };
};
export const login = () => {
    return{
        type: 'SIGN_IN'
    };
};