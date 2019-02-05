import React from 'react';
import PropTypes from 'prop-types';

export class NewsItem extends React.Component {
    render() {
        const { picture, title, text, tags } = this.props.item;
        return (
            <div>
                {title}
                <div>
                    {text}
                </div>
            </div>
        )
    }
}

NewsItem.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.array.isRequired,
}