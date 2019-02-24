import * as React from "react";
import {HelloWorld} from "./helloworld";

export class Home extends React.Component<any, any> {
  render() {
    return(
      <HelloWorld source="Home" target="GUEST"/>
    )
  }
}