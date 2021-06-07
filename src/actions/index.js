export const get = mapData => {
    return{
        type: 'GET',
        payload: mapData
    };
};
export const login = () => {
    return{
        type: 'SIGN_IN'
    };
};