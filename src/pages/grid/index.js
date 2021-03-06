import React from 'react';
import Grid from './Grid';
import { recetasAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Iterator } from '../_helpers/';

export default function GridContainer() {

    const dispatch = useDispatch();
    
    const  state = useSelector(state => state.recetasReducer);

    const { recetas }= state;

    React.useEffect( () => {
        
        if (recetas.length === 0) {
            dispatch(recetasAction.getRecetas());        
        }
        
        return () => {
            // dispatch(reset())
        };
    }, [dispatch, recetas])

    return (
        
        <Grid {...state} >
            <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            
                    <Iterator
                        items={recetas}
                    />
            </section>
        </Grid>
    )
}

// GridContainer.propTypes = {
//     children: PropTypes.element.isRequired
// };