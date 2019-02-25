/// <reference path="../../../@types/IResumeData.d.ts" />

import React from "react";

interface IContact {
  data: IContactData;
}

export class Contact extends React.Component<IContact, IContact> {
  constructor(props: IContact) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render(): JSX.Element {
    let {
      name,
      email,
      phone,
      social
    } = this.state.data;

    return (
      <section className="contact">
        <h1>{name}</h1>
        <div>{email}</div>
        {phone ? <div>{phone}</div> : ""}
        {social ? (
          <div className="social">
            {social.website ? <div>{social.website}</div> : ""}
            {social.linkedin ? <div>{social.linkedin}</div> : ""}
            {social.github ? <div>{social.github}</div> : ""}
            {social.gitlab ? <div>{social.gitlab}</div> : ""}
            {social.twitter ? <div>{social.twitter}</div> : ""}
            {social.instagram ? <div>{social.instagram}</div> : ""}
          </div>
        ) : ""}
      </section>
    );
  }
}