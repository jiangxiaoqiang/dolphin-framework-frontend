/**
 * Created by hldev on 17-2-13.
 */

import React, {Component} from 'react';
import Nav from './Nav';

class Frame extends Component {
    render() {
        return (
            <div>
                <section>
                    <Nav />
                </section>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default Frame;
