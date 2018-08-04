import * as ApiActions from 'Reducers/Api/Actions';
import * as LoadersActions from 'Reducers/Loaders/Actions';

const productSectionJson = 'Data/cn/ProductSection.json';

export const RECEIVE_PRODUCT_SECTION = 'RECEIVE_PRODUCT_SECTION';

export const fetchProductSection = () => {
    return function (dispatch) {
        dispatch(LoadersActions.toggleProductSectionLoader());
        dispatch(ApiActions.fetchData(productSectionJson, receiveProductSection))

    }
};

export const receiveProductSection = data => {
    return function (dispatch) {
        dispatch(LoadersActions.toggleProductSectionLoader());
        return dispatch({
            type: RECEIVE_PRODUCT_SECTION,
            data
        })
    }
};