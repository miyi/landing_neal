import React from "react";
import SamplePage from "./sample-page.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect, browserHistory } from "react-router";
import { App } from "neal-react";

class SampleApp extends React.Component {
  render() {
    return (
      <App
        history={ browserHistory }>
        { this.props.children }
      </App>
    );
  }
}

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ SampleApp } history={ browserHistory }>
      <IndexRoute name="home" component={ SamplePage }/>
      <Route path="*" component={ SamplePage }/>
    </Route>
  </Router>
), document.getElementById("main"));
