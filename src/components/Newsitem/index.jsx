import React from 'react';
import PropTypes from 'prop-types';

export default class NewsItem extends React.Component {
    render() {
        const { picture, title, text, tags } = this.props.data;
        const tags_length = tags.length - 1;

        return (
            <div>
                <h1>{title}</h1>
                <article>
                    {text}
                </article>
                <div>{tags.map((item, index) => (<code><small>{item}{index !== tags_length && ","}</small></code>))}</div>
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