import React from 'react';
// import PropTypes from 'prop-types';

export default function Main(props) {

    return (
       <div className="sidebar__main">
            {props.children}

            <section className="row">
                <div className="col-12 hlp-text-center hlp-margintop-40">
                    <button className="--btn --secondary">MÁS NOTAS DE ACUMULADO GRILLA</button>
                </div>
            </section>
       </div>
    )
}

// Main.propTypes = {

// }