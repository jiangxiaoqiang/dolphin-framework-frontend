/**
 * Created by hldev on 17-2-13.
 */
import React, {Component} from 'react';
import Preview from './Preview';

class PreviewList extends Component {

    static propTypes = {
        //articleList: React.PropTypes.arrayOf(React.PropTypes.object)

        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: PropTypes.arrayOf(PropTypes.object),
        loadArticles: PropTypes.func,

    };


    render() {
        return this.props.articleList.map(item => (<Preview{...item} key={item.id}/>));

        if (error) {
            return <p>Opps,something is wrong</p>
        }

        if (loading) {
            return <p>loading...</p>
        }

        return articleList.map(item => (<Preview {...item} key={item.id}/>));

    }

    componentDidMount() {
        this.props.loadArticles();


    }


}