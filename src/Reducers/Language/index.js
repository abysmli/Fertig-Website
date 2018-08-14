import * as actions from './Actions';

const initLanguage = window.navigator.language === 'zh-CN' ? 'cn' : 'de';

const initialState = {
    language: initLanguage
};

export default function LanguageReducer(state = initialState, action = {}) {

    const {
        type,
        data
    } = action;

    switch (type) {
        case actions.SET_LANGUAGE: {
            return {
                ...state,
                language: data,
            };
        }
        default:
            return state;
    }
}
