import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tags, GridTitle, Spinner, Error } from '../../components/feedback';
import { Row } from '../../components/layout';
import GlobalContext from '../../globalContext';

export default function GridContainer(props) {

    const global = React.useContext(GlobalContext);

    const { error, loading, errorMsg, tags, children } = props;

    const arrayTags = Object.values(tags).slice(0, 10);
    
    const title = global.gridTitle;

    if (error) {
        return <Error msg={errorMsg} />
    }

        if (loading) {
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
            {
                children
            }

        </Fragment>
    )
}

GridContainer.propTypes = {
    children: PropTypes.element.isRequired
};

