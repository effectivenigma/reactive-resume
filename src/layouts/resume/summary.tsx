/// <reference path="../../../@types/IResumeData.d.ts" />

import React from "react";

interface ISummary {
  data: Array<string>;
}

export class Summary extends React.Component<ISummary, ISummary> {
  constructor(props: ISummary) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(): JSX.Element {
    let items = this.state.data;

    if (items.length > 0) {
      let itemNodes: Array<JSX.Element> = [];
      items.forEach((i, idx) => itemNodes.push(<li key={idx}>{i}</li>));

      return (
        <section className="summary">
          <h3>Summary</h3>
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