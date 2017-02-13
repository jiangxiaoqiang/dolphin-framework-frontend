/**
 * Created by hldev on 17-2-13.
 */

import React, {Component} from 'react';
//import './Preview';

class Preview extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        title: React.PropTypes.string,
    };

    render() {
        return (
            <article>
                <h1>{this.props.title}</h1>
                <span>{this.props.date}</span>
                <p>{this.props.description}</p>
            </article>
        );
    }
}



