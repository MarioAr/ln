import React from 'react';
import { Card } from '../../components/card';
import { convertDate } from '../../services/utils';
import PropTypes from 'prop-types';
import GlobalContext from '../../globalContext';

export default function Items (props) {

    const global = React.useContext(GlobalContext);

    const { items, li } = props;

    const notFound = global.messages.notFound;

    const separator = global.date.separator;

    return (
                
            items && items.length > 0
            ? items
                .map(item => {
                    return li
                        ? <li key={`${item._id}`}><Card {...item} date={convertDate(item.display_date, separator)} /></li>
                         : <Card key={item._id} {...item} date={convertDate(item.display_date, separator)} />
                })
            : notFound
           
    )
}

Items.defaultValues = {
    items: []
}
Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}