import * as React from "react";
import {Switch, Route} from "react-router-dom";
import {Nav} from "./nav/nav";
import {Home} from "./components/home"
import {HelloWorld} from "./components/helloworld";

export class App extends React.Component<any, any> {
  render() {
    return(
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" render={() => {
            return <HelloWorld source="page1" target="GUEST"/>
          }} />
        </Switch>
      </div>
    )
  }
}