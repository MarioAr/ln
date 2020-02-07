import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

export default function Tags(props) {
    
    const { tags } = props;
    
    return (
        <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
            {
                tags.length > 0 && tags.map(item => {
                    return <Tag key={item.slug} {...item} />
                })
            }
        </div>
    )
}
Tags.defaultValues = {
    tags: []
}
Tags.propTypes = {
    tags: PropTypes.array
}

