import React from 'react';
import Grid from './Grid';
import { recetasAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Items from './Items';

export default function GridContainer() {

    const dispatch = useDispatch();
    
    const  state = useSelector(state => state.recetasReducer);

    const { recetas }= state;

    React.useEffect( () => {
        
        dispatch(recetasAction.getRecetas());

        return () => {
            // dispatch(reset())
        };
    }, [dispatch])

    return (
        <Grid {...state} >
            <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                <Items items={recetas} />
            </section>
        </Grid>
    )
}