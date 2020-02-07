import React from 'react';

export default function Content(props) {

    return (
        <main>
            <div className="lay-sidebar">
                {props.children}
            </div>
        </main>
    )
}