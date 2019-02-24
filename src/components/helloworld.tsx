import * as React from "react";
import {Link} from "react-router-dom";

interface IHelloWorld {
  source: string;
  target: string;
}

export class HelloWorld extends React.Component<IHelloWorld, any> {
  render() {
    return(
      <div>
        <div>hello {this.props.target}, welcome to {this.props.source}</div>
      </div>
    )
  }
}