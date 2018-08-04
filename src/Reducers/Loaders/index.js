import * as actions from './Actions';

const initialState = {
    showProductSectionLoader: false,
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
        default:
            return state;
    }
}
