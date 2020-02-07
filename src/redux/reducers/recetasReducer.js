import { types } from '../types';

const defaultState = {
    loading: false,
    error: false,
    errorMsg: '',

    recetas: [],
    tags: {}
}

export default function reducer(state = defaultState, action) {

        const { type, payload } = action;

        switch (type) {
            case types.ERROR:

                return {
                    ...state,
                    error: payload.error,
                    errorMsg: payload.errorMsg,
                    loading: false
                }

            case types.RESET:

                return {
                    ...state,
                    error: false,
                    errorMsg: '',
                    loading: false
                }
        
            case types.REQUEST_RECETAS:

                return {
                    ...state,
                    loading: true
                }

            case types.RECEIVE_RECETAS:

                return {
                    ...state,
                    recetas: payload
                }

            case types.RECEIVE_TAGS:

                return {
                    ...state,
                    tags: payload
                }

            default:
                return {
                    ...state
                }
        }
    }

