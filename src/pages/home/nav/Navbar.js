import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../../components/layout';

export default function Nav() {

// com-nav-mobile
    return (
        <Navbar>
            <Link to="http://especiales.lanacion.com.ar/arc-css/acumulado.asp" className="col-2 item-foo"><i className="icon-home"></i><p>Home</p></Link>
            <Link to="http://especiales.lanacion.com.ar/arc-css/acumulado.asp" className="col-4 item-foo"><i className="icon-club"></i><p> <nobr>Club LA NACION</nobr></p></Link>
            <Link to="http://especiales.lanacion.com.ar/arc-css/acumulado.asp" className="col-3 item-foo"><i className="icon-comment"></i><p>Mi cuenta</p></Link>
            <button className="col-2 item-foo"><i className="icon-menu"></i><p>Menú</p></button>
        </Navbar>
    )
}