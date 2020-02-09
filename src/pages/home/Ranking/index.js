import React from 'react';
import PropTypes from 'prop-types';
import { Iterator } from '../../_helpers/';
import GlobalContext from '../../../globalContext';
import Div from './Div';
import { useSelector } from 'react-redux';


export default function RankingContainer(props) {

    const state = useSelector(state => state.recetasReducer);

    const { recetas } = state;

    const { title } = props;

    const global = React.useContext(GlobalContext);

    const { rankingCount } = global;
    const index = Math.floor(Math.random() * (recetas.length-rankingCount));
    
    const data = index > 0 ? recetas.slice(index, index+rankingCount) : [];

    return (
        <div className="com-ranking  hlp-tablet-none" >
            <h2 className="com-title-section-m">{title}</h2>
            <ol className="com-ordered">
                {/* <Items items={data} /> */}
                <Iterator items={data} component={Div} />
            </ol>
        </div>
    )

}
RankingContainer.defaultProps = {
    title: 'Listado'
}
RankingContainer.propTypes = {
    title: PropTypes.string,
    // children: PropTypes.element.isRequired
}
