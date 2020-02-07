import React, { Fragment } from 'react';
// import data from '../../services/data';

import { Tags, GridTitle, Spinner, Error } from '../../components/feedback';
import { Row } from '../../components/layout';
// import { SidebarAside, SidebarMain } from '../home/sidebar';

export default function GridContainer(props) {
    
    const { error, loading, errorMsg, tags } = props;

    const arrayTags = Object.values(tags).slice(0, 10);
    
    let title="Acumulado Grilla";
    
    if (error) {
        return <Error msg={errorMsg} />
    }

        if (loading) {
//
        return <Spinner />
    }

    return (
        <Fragment>
            
            <Row>
                <GridTitle title={title} />
            </Row>
            
            <Row>
                <Tags tags={arrayTags} />
            </Row>
            <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
                {
                    props.children
                }
            </section>

        </Fragment>
    )
}



