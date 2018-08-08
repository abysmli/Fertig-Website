import * as actions from './Actions';

const initialState = {
    showProductSectionLoader: false,
    showCarouselLoader: false,
    showProductLoader: false,
};

export default function LoadersReducer(state = initialState, action = {}) {

    const {
        type
    } = action;

    const {
        showProductSectionLoader,
        showCarouselLoader,
        showProductLoader,
    } = state;

    switch (type) {
        case actions.TOGGLE_PRODUCT_SECTION_LOADER: {
            return {
                ...state,
                showProductSectionLoader: !showProductSectionLoader,
            };
        }
        case actions.TOGGLE_CAROUSEL_LOADER: {
            return {
                ...state,
                showCarouselLoader: !showCarouselLoader,
            };
        }
        case actions.TOGGLE_PRODUCT_LOADER: {
            return {
                ...state,
                showProductLoader: !showProductLoader,
            };
        }
        default:
            return state;
    }
}
