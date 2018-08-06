import * as ApiActions from 'Reducers/Api/Actions';
import * as LoadersActions from 'Reducers/Loaders/Actions';

const productSectionJson = 'Data/cn/ProductSection.json';
const carouselJson = 'Data/cn/Carousel.json';

export const RECEIVE_PRODUCT_SECTION = 'RECEIVE_PRODUCT_SECTION';
export const RECEIVE_CAROUSEL = 'RECEIVE_CAROUSEL';

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

export const fetchCarousel = () => {
    return function (dispatch) {
        dispatch(LoadersActions.toggleCarouselLoader());
        dispatch(ApiActions.fetchData(carouselJson, receiveCarousel))

    }
};

export const receiveCarousel = data => {
    return function (dispatch) {
        dispatch(LoadersActions.toggleCarouselLoader());
        return dispatch({
            type: RECEIVE_CAROUSEL,
            data
        })
    }
};


