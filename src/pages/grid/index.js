import React from 'react';
import { Card } from '../../components/card';
import { convertDate } from '../../services/utils';
import Grid from './Grid';
import { recetasAction } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import GlobalContext from '../../globalContext';

export default function GridContainer(props) {

    const global = React.useContext(GlobalContext);

    const dispatch = useDispatch();
    
    const  state = useSelector(state => state.recetasReducer);

    const { recetas }= state;

    React.useEffect( () => {
        
        dispatch(recetasAction.getRecetas());

        return () => {
        
        };
    }, [dispatch])

    const format =global.date.separator;

    const title = global.gridTitle;

    const notFound = global.messages.notFound;
    return (
        <Grid {...state} title={title} >
            {
                recetas && recetas.length > 0
                ? recetas
                    .map(item => {
                        return <Card key={item._id} {...item} date={convertDate(item.display_date, format)} />
                })
                    : notFound
            }
        </Grid>
    )
}