import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../../components/Newsitem';
import { loadNews } from '../../actions/NewsActions';
import  mock from '../../data.json';

class News extends Component {
    componentDidMount() {
        this.props.loadNews(mock);
    }
    render() {
        const { news, fetching } = this.props.news;
        console.log(news);
        return (
            <div className="App">
                {news.map(item => <NewsItem key={item._id} data={item} />)}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadNews: news => dispatch(loadNews(news)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(News);