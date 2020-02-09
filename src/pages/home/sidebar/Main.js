import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/input';

export default function Main(props) {
    function onClick() {
        
    }
    return (
       <div className="sidebar__main">
            {props.children}

            <section className="row">
                <div className="col-12 hlp-text-center hlp-margintop-40">
                    <Button className={"--btn --secondary"} onClick={onClick} label={`MÁS NOTAS DE ACUMULADO GRILLA`} />
                </div>
            </section>
       </div>
    )
}

Main.propTypes = {
    children: PropTypes.element.isRequired
};