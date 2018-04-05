import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

class Layout extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <main className={classes.Content}>
                {this.props.children}
                </main>
                <p>good</p>
            </Aux>
        )
    }
}

export default Layout;