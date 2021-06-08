import * as TYPES from './types';

const initTodolist = {
    token: null,
    loading: false,
    error: null,
    list: []
}

export const todoReducer = (state = initTodolist, { type, payload = {} }) => {
    switch (type) {
        case TYPES.LOGIN_REQ:
            return { ...state, loading: true };
        case TYPES.LOGIN_SUCCESS:
            return { ...state, token: payload, loading: false };
        case TYPES.LOGIN_FAIL:
            return { ...state, loading: false, error: payload };
        case TYPES.GET_REQ:
            return { ...state, loading: true };
        case TYPES.GET_SUCCESS:
            return { ...state, list: payload, loading: false };
        case TYPES.GET_FAIL:
            return { ...state, loading: false, error: payload };
        case TYPES.POST_REQ:
            return { ...state, loading: true };
        case TYPES.POST_SUCCESS:
            return { ...state, list: [...state.list, payload], loading: false };
        case TYPES.POST_FAIL:
            return { ...state, loading: false, error: payload };
        case TYPES.DELETE_REQ:
            return { ...state, loading: true };
        case TYPES.DELETE_SUCCESS:
            return { ...state, list: state.list.filter(item => item._id !== payload), loading: false };
        case TYPES.DELETE_FAIL:
            return { ...state, loading: false, error: payload };
        case TYPES.UPDATE_REQ:
            return { ...state, loading: true };
        case TYPES.UPDATE_SUCCESS:
            return {
                ...state,
                list: [...state.list.slice(0, payload.order - 1),
                payload,
                ...state.list.slice(payload.order,
                    state.list.length)],
                loading: false
            };
        case TYPES.UPDATE_FAIL:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};