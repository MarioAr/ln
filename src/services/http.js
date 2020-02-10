import { endpoint }  from './config';

export async  function getRecetas() {
    
    try {
        let rta = await fetch(endpoint.recetas);

        return rta.json();
    } catch (error) {
        return error;
    }
}
