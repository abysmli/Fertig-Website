import * as actions from './Actions';

const initialState = {
    showProductSectionLoader: false,
    showCarouselLoader: false
};

export default function LoadersReducer(state = initialState, action = {}) {

    const {
        type
    } = action;

    switch (type) {
        case actions.TOGGLE_PRODUCT_SECTION_LOADER: {
            const {showProductSectionLoader} = state;
            return {
                ...state,
                showProductSectionLoader: !showProductSectionLoader,
            };
        }
        case actions.TOGGLE_CAROUSEL_LOADER: {
            const {showCarouselLoader} = state;
            return {
                ...state,
                showCarouselLoader: !showCarouselLoader,
            };
        }
        default:
            return state;
    }
}
