/**
 * Created by hldev on 17-2-9.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PreviewList from '../components/Home/PreviewListRedux';
import {listActions} from './HomeRedux';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello World！</h1>
                < PreviewList
                    {...
                        this.props.list
                    }
                    {...
                        this.props.listActions
                    }
                />
            </div>
        );
    }
}

export default connect(state => {
    return {
        list: state.home.list,
    };


}, dispatch => {
    return {
        listActions: bindActionCreators(listActions, dispatch),
    };
})(Home);
