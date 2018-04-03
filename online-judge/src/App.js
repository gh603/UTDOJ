import React, { Component } from 'react';
import classes from './App.css';
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
      let routes = (
          <div>
              <p>yy</p>
          </div>
      );

    return (
        <div>
            <Layout>
                {routes}
            </Layout>
        </div>
    );
  }
}

export default App;
