import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

export default function Tags(props) {
    
    const { tags } = props;
    
    return (
        <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
            {
                tags && tags.length > 0 
                ? tags.map(item => {
                    return <Tag key={item.slug} {...item} />
                })
                : null
            }
        </div>
    )
}
Tags.defaultProps = {
    tags: []
}
Tags.propTypes = {
    tags: PropTypes.array
}

