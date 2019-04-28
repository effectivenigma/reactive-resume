/// <reference path="../../@types/ITheme.d.ts" />

import React from "react";
import { Contact } from "./resume/contact";
import { Summary } from "./resume/summary";
import { Skills } from "./resume/skills";
import { Education } from "./resume/education";
import { Experience } from "./resume/experience";

// import CSS so it gets injected inline
import * as BaseCss from "../themes/base.css";
import * as DefaultTheme from "../themes/default.css";
import * as ModernTheme from "../themes/modern.css";

interface IResume {
  data: IResumeData;
  theme: ITheme;
}

export class Resume extends React.Component<IResume, IResume> {
  constructor(props: IResume) {
    super(props);
    this.state = props;
  }

  render(): JSX.Element {
    let {
      name: themeName,
      palette,
      typography
    } = this.state.theme;
    let baseStyle = {}; //Object.assign({}, palette, typography); // not compatible with IE

    let {
      contact,
      summary,
      skills,
      experience,
      projects,
      education
    } = this.state.data;

    return (
      <article style={baseStyle} className={themeName}>
        {contact ? <Contact data={contact} /> : ""}
        {summary && summary.length ? <Summary data={summary} /> : ""}
        {skills ? <Skills data={skills} /> : ""}
        {experience ? <Experience data={experience} /> : ""}
        {education ? <Education data={education} /> : ""}
      </article>
    );
  }
}