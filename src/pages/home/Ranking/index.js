import React from 'react';
import Items from '../../grid/Items';
import { useSelector } from 'react-redux';

export default function RankingContainer(props) {

    const state = useSelector(state => state.recetasReducer);

    const { recetas } = state;

    const index = Math.floor(Math.random() * (recetas.length-3));
    
    const data = index > 0 ? recetas.slice(index, index+3) : [];
    return (
        <div className="com-ranking  hlp-tablet-none" >
            <h2 className="com-title-section-m">Recetas más leídas</h2>
            <ol className="com-ordered">
                <Items items={data} li={true} key={0} />
            </ol>
        </div>
    )

}

