import { types } from '../types';
import {
    getRecetas as _getRecetas
} from '../../services/http';
import {
    extractSubtype,
    getTags
} from '../../services/utils';


export function error( errorMsg="Error!", error=true,) {
    
    return {
        type: types.ERROR,
        payload: {
            error,
            errorMsg
        }
    }
}

export function reset() {
    
    return {
        type: types.RESET
    }
}

export function reciveTags(tags) {
    
    return {
        type: types.RECEIVE_TAGS,
        payload: tags
    }
}

export function receiveRecetas(recetas) {
    
    return {
        type: types.RECEIVE_RECETAS,
        payload: recetas
    }
}

export function requestRecetas() {
    
    return {
        type: types.REQUEST_RECETAS
    }
}


export  function getRecetas() {

    return async dispatch => {
        dispatch(reset());
        dispatch(requestRecetas());

        try {
            let data = await _getRecetas();
            /* Lanzo error si la rta no es la que espero */
            if (!data.articles) throw Error("Data error");

            data = extractSubtype(data.articles)
            /* Despacho reseteo de error y laoding */
            dispatch(reset());
            /* Despacho recetas */
            dispatch(receiveRecetas(data));
            /* Despacho tags */
            dispatch(reciveTags(getTags(data)));
        } catch (e) {
            
            dispatch(error(e.toString()));
        }

    }
    
}
