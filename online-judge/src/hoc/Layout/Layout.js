import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';

import Toolbar from '../../component/Navigation/Toolbar/Toolbar'; 
import Footer from '../../component/Navigation/Footer/Footer';

class Layout extends Component {
    state = {

    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <main className={classes.Content}>
                {this.props.children}
                </main>
                <p>good</p>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;