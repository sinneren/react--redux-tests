import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
    render() {
        const { news } = this.props;

        return (
            <div className="App">

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