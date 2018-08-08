import * as actions from './Actions';

const initialState = {
    productSections: [],
    selectedProduct: {},
    carousels: [],
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
        case actions.RECEIVE_CAROUSEL: {
            return {
                ...state,
                carousels: data,
            }
        }
        case actions.RECEIVE_PRODUCT: {
            return {
                ...state,
                selectedProduct: data
            }
        }
        default: {
            return state
        }
    }
}