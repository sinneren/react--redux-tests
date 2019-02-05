import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../../components/Newsitem';

class News extends Component {
    render() {
        const { news } = this.props;

        return (
            <div className="App">
                {news.map(item => <NewsItem data={item} />)}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
    }
}

export default connect(mapStateToProps)(News);