import React from "react";
import { Contact } from "./resume/contact";

interface IResume {
  data: IResumeData;
  theme: ITheme
}

export class Resume extends React.Component<IResume, IResume> {
  constructor(props: IResume) {
    super(props);
    this.state = props;
  }

  render(): JSX.Element {
    let theme = Object.assign({}, this.state.theme.palette, this.state.theme.typography); // not compatible with IE
    return (
      <article style={theme} className={this.state.theme.name}>
        <Contact data={this.state.data.contact} />
      </article>
    );
  }
}