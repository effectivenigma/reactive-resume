import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Nav } from "./nav/nav";
import { Home } from "./components/home"
import { HelloWorld } from "./components/helloworld";
import { Resume } from "./layouts/resume";
import * as data from "../schema/master-sample.json";

import { DefaultTheme } from "./themes/default";

export class App extends React.Component<any, any> {

  render() {
    let theme = DefaultTheme().styles;
    return (
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" render={() => {
            return <HelloWorld source="page1" target="GUEST" />
          }} />
          <Route path="/resume" render={() => {
            return <Resume data={data} theme={theme} />
          }} />
        </Switch>
      </div>
    )
  }
}