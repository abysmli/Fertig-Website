import Api from 'Core/Api';

export const REQUEST_DATA = 'REQUEST_DATA';
export const POST_DATA = 'POST_DATA';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const CANCEL_REQUEST = 'CANCEL_REQUEST';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REQUEST_ERROR = 'REQUEST_ERROR';


const requestData = (source) => ({
    type: REQUEST_DATA,
    source
});


export const postRequest = (source, data) => ({
    type: POST_DATA,
    source,
    data
});


const networkError = (source, error) => ({
    type: NETWORK_ERROR,
    source,
    error,
    receivedAt: Date.now()
});


const cancelRequest = (source) => ({
    type: CANCEL_REQUEST,
    source
});


const receiveData = (source, data) => ({
    type: RECEIVE_DATA,
    source,
    data,
    receivedAt: Date.now()
});


const requestError = (source, error) => ({
    type: REQUEST_ERROR,
    source,
    error,
    receivedAt: Date.now()
});


const handleResponse = (source, request, receiver, dispatch) => request
    .then(response => {
        dispatch(receiveData(source, response.data));
        return dispatch(receiver(response.data));
    })
    .catch(error => {
        console.error("Request Error: " + error, error);
        console.log(JSON.parse(JSON.stringify(error)));
        dispatch(receiveData(source, error));
        return dispatch(receiver(error));

    });


export const fetchData = (source, receiver) => dispatch => {
    dispatch(requestData(source));
    return handleResponse(
        source,
        Api.request(source),
        receiver,
        dispatch
    );
};


export const postData = (source, data, receiver) => dispatch => {
    dispatch(postRequest(source, data));
    return handleResponse(
        source,
        Api.request({url: source, method: 'post', data: data}),
        receiver,
        dispatch
    );
};