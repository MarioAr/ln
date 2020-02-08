import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card(props) {
    
    const { display_date, headlines, promo_items, date } = props;
    const { url } = promo_items.basic;
    const link = '#';
    const title = headlines ? headlines.basic : '';
    const dateTxt = date || display_date;
    
    return (
        <article className="mod-caja-nota lugares w-100-mobile">
            <section id="" className="cont-figure">
                <Link to={link} className="figure">
                    <picture id="" className="content-pic picture">
                        <img src={url} alt="" className="content-img" />
                    </picture>
                </Link>
            </section>
                <div className="mod-caja-nota__descrip">
                    <h2 className="com-title-acu">
                        <Link to={link}>
                            {/* <b>{subtitle}</b>  */}
                            {title}
                        </Link>
                    </h2>
                    <h4 className="com-date">{dateTxt}</h4>
                    {/* <h4 className="com-date">1 de Julio de 2019</h4> */}
                </div>
        </article>
    )
}

Card.propTypes = {
    date: PropTypes.string,
    display_date: PropTypes.string.isRequired,
    headlines: PropTypes.shape({basic: PropTypes.string}).isRequired,
    promo_items: PropTypes.shape({
        basic: PropTypes.shape({
                url: PropTypes.string
            }).isRequired
        }).isRequired,
}