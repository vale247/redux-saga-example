import * as actions from './actionTypes';

// action creators
export const simpleFetch = () => {
    return { type: actions.SIMPLE_FETCH }
};

export const fetchDog = () => {
    return { type: actions.API_CALL_REQUEST }
};

export const requestDog = () => {
    return { type: actions.API_CALL_RUNNING }
};

export const requestDogSuccess = (data) => {
    return { type: actions.API_CALL_SUCCESS, dog: data.message }
};

export const requestDogFailed = () => {
    return { type: actions.API_CALL_FAILURE }
};