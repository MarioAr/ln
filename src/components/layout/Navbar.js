import React from 'react';

export default function Navbar(props) {

    // com-nav-mobile
    return (
        <nav className="com-nav-mobile" >
            <div className="row" >
                {props.children}                
            </div>
        </nav>
    )
}