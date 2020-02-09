import React, { Fragment} from 'react';
import { Card } from '../../components/card';
import { convertDate } from '../../services/utils';
import PropTypes from 'prop-types';
import GlobalContext from '../../globalContext';

export default function Iterator(props) {

    const global = React.useContext(GlobalContext);

    const { items, component } = props;
    
    const Component = component || Fragment;
    
    const notFound = global.messages.notFound;

    const separator = global.date.separator;

    return (

        items && items.length > 0
            ? items
                .map(item => 
                    <Component key={item._id}>
                        <Card  {...item} date={convertDate(item.display_date, separator)} />
                    </Component>
                )
            : notFound

    )
}

Iterator.defaultProps = {
    items: [],
}
Iterator.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    Component: PropTypes.element
}