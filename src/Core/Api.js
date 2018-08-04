import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

const ax = axios.create({
    paramsSerializer: function (params) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
    },
});

export class Api {

    static request(config, successCb, failCb) {

        const promise = ax.request(config);
        if (_.isFunction(successCb)) {
            promise.then(successCb);
        }
        if (_.isFunction(failCb)) {
            promise.catch(failCb);
        }
        return promise;
    }

    static cancel() {
        source.cancel();
        source = CancelToken.source();
        ax.defaults.cancelToken = source.token;
    }

    static setLanguage(language) {
        if (ax.defaults.params && ax.defaults.params._language === language) {
            // already set, nothing to do
            return 0;
        } else {
            ax.defaults.params = {
                ...ax.defaults.params,
                _language: language || 'en_GB'
            };
            return 1;
        }
    }

    static setChannel(channel) {
        ax.defaults.params = {
            ...ax.defaults.params,
            _channel: channel
        }
    }

    static setToken(token) {
        ax.defaults.params = {
            ...ax.defaults.params,
            access_token: token
        }
    }

    static init(config) {
        for (let key in config) {
            ax.defaults[key] = config[key];
        }
    }

}

export const isCancelError = (error) => {
    return (error instanceof axios.Cancel);
};

export class ApiSimulator extends Api {

    static requestMappings = [];

    static addRequestMapping({config, response, error}) {
        ApiSimulator.requestMappings.push({config, response, error});
    }

    static getPromiseForConfig(config) {
        return _.find(ApiSimulator.requestMappings, {config});
    }

    static request(config, successCb, failCb) {

        const rm = _.find(ApiSimulator.requestMappings, {config});
        const promise = new Promise((resolve, reject) => {
            if (!rm) {
                console.log('NO MOCK', config);
                reject({error: {message: "No mock for request", config}})
            }
            if (rm.error) {
                reject(rm)
            } else {
                resolve(rm.response);
            }
        });
        return promise;
    }

    static init() {
        Api.request = ApiSimulator.request;
    }
}

export default Api;