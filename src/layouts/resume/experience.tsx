/// <reference path="../../../@types/IResumeData.d.ts" />

import React from "react";
import dateformatter from "../../utils/date-formatter";

interface IExperience {
  data: Array<IExperienceData>;
}

export class Experience extends React.Component<IExperience, IExperience> {
  constructor(props: IExperience) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(): JSX.Element {
    let items = this.state.data;

    if (items.length > 0) {
      let itemBlocks: Array<JSX.Element> = [];

      items.forEach((item, idx) => {
        let roles: Array<JSX.Element> = [];

        item.roles.forEach((r, ridx) => {
          let highlights: Array<JSX.Element> = [];
          r.highlights.forEach((h, hidx) => {
            highlights.push(<li key={hidx}>{h}</li>);
          });

          roles.push(
            <div key={ridx}>
              <header>
                <h4>{r.position}</h4>
                {item.roles.length > 1 ?
                  <span>
                    <time>{dateformatter.toMMMdd(r.duration.start)}</time> - <time>{dateformatter.toMMMdd(r.duration.end)}</time>
                  </span>
                : ""
                }
              </header>
              <ul>
                {highlights}
              </ul>
            </div>
          );
        });

        itemBlocks.push(
          <div key={idx}>
            <header>
              <mark>{item.organization}</mark>
              <span>{item.location}</span>
              <span>
                <time>{dateformatter.toMMMdd(item.tenure.start)}</time> - <time>{dateformatter.toMMMdd(item.tenure.end)}</time>
              </span>
            </header>
            {roles}
          </div>
        );
      });

      return (
        <section className="experience">
          <h3>Experience</h3>
          {itemBlocks}
        </section>
      );
    } else {
      return null;
    }
  }
}