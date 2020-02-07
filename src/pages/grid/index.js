import React from 'react';
import { Card } from '../../components/card';
import { convertDate } from '../../services/utils';
import Grid from './Grid';
import { recetasAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function GridContainer(props) {
    const dispatch = useDispatch();
    
    const  state = useSelector(state => state.recetasReducer);

    const { recetas }= state;

        React.useEffect( () => {
        
        dispatch(recetasAction.getRecetas());
        return () => {
        
        };
    }, [dispatch])



    
    return (
        <Grid {...state}>
            {
                recetas && recetas.length > 0
                ? recetas
                    .filter(item => item.subtype === "7")
                    .map(item => {
                    return <Card key={item._id} {...item} date={convertDate(item.display_date, 'de')} />
                })
                : 'No se encontraron resultados'
            }
        </Grid>
    )
}