import { endpoint }  from './config';

export function getRecetas() {
    return fetch(endpoint.recetas)
        .then(data => data.json())
        .catch(error);
}



function error(e) {
    return e;
}