/// <reference path="../../../@types/IResumeData.d.ts" />

import React from "react";
import dateformatter from "../../utils/date-formatter";

interface IEducation {
  data: Array<IEducationData>;
}

export class Education extends React.Component<IEducation, IEducation> {
  constructor(props: IEducation) {
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
        let highlights: Array<JSX.Element> = [];
        item.highlights.forEach((i, hidx) => highlights.push(<li key={hidx}>{i}</li>));

        itemBlocks.push(
          <div key={idx}>
            <header>
              <mark>{item.institution}</mark>
              <span>{item.location}</span>
              <span>
                <time>{dateformatter.toMMMdd(item.duration.start)}</time> - <time>{dateformatter.toMMMdd(item.duration.end)}</time>
              </span>
            </header>
            <div>
              <h4>{item.major}</h4>
              <ul>
                {highlights}
              </ul>
            </div>
          </div>
        );
      });

      return (
        <section className="education">
          <h3>Education</h3>
          {itemBlocks}
        </section>
      );
    } else {
      return null;
    }
  }
}