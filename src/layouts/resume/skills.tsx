/// <reference path="../../../@types/IResumeData.d.ts" />

import React from "react";

interface ISkills {
  data: IStringMap<Array<string>>
}

export class Skills extends React.Component<ISkills, ISkills> {
  constructor(props: ISkills) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(): JSX.Element {
    let items = this.state.data;

    if (Object.keys(items).length > 0) {
      let itemNodes: Array<JSX.Element> = [];
      Object.keys(items).forEach((key, idx) => {
        let str = items[key];

        if (str && str.length > 0) {
          itemNodes.push(
            <li key={idx}>
              <span className="group">{`${key}: `}</span>
              <span>{str}</span>
            </li>
          );
        }
      });

      return (
        <section className="skills">
          <h3>Skills</h3>
          <ul>
            {itemNodes}
          </ul>
        </section>
      );
    } else {
      return null;
    }
  }
}