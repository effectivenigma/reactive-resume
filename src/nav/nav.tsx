import * as React from "react";
import {Link} from "react-router-dom";

export class Nav extends React.Component<any, any> {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}