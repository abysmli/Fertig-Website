import * as actions from './Actions';

const initialState = {
    productSections: [],
    isLoadingProductionSections: false,
};

export default function ProductsReducer(state = initialState, action = {}) {
    const {
        type,
        data
    } = action;

    switch (type) {
        case actions.RECEIVE_PRODUCT_SECTION: {
            return {
                ...state,
                productSections: data,
            }
        }
        default: {
            return state
        }
    }
}