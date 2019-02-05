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
                <code>{tags.map((item, index) => (<small key={index}>{item}{index !== tags_length && ","}</small>))}</code>
            </div>
        )
    }
}

NewsItem.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    tags: PropTypes.array,
}