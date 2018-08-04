import _ from 'lodash';

import {CANCEL_REQUEST, NETWORK_ERROR, POST_DATA, RECEIVE_DATA, REQUEST_DATA, REQUEST_ERROR} from './Actions'

const initialState = {
    sources: {},
    isFetching: false
};

function getSourceState(action) {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                isFetching: true,
                source: action.source
            };

        case POST_DATA:
            return {
                isFetching: true,
                isPosted: true,
                postData: action.data,
                source: action.source
            };

        case NETWORK_ERROR:
            console.logError("Network Error: " + action.error, action.error);
            return {
                isFetching: false,
                error: action.error,
                source: action.source
            };

        case REQUEST_ERROR:
            console.logError("Request Error: " + action.error, action.error);
            return {
                isFetching: false,
                error: action.error,
                source: action.source
            };

        case RECEIVE_DATA:
            return {
                isFetching: false,
                data: action.data,
                source: action.source
            };

        case CANCEL_REQUEST:
            return {
                isFetching: false,
                isCancelled: true,
                source: action.source
            };

        default:
            return {}
    }
}

export default function apiReducer(state = initialState, action = {}) {

    switch (action.type) {
        case REQUEST_DATA:
        case POST_DATA:
        case NETWORK_ERROR:
        case RECEIVE_DATA:
        case CANCEL_REQUEST:
        case REQUEST_ERROR:
            const sources = {
                ...state.sources,
                [action.source]: getSourceState(action)
            };
            return {
                ...state,
                sources,
                isFetching: _.reduce(sources, function (result, value) {
                    return result || value.isFetching
                }, false)
            };

        default:
            return state
    }
}