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

    let wprefix = "https://www.";

    return (
      <section className="profile">
        <h1>{name}</h1>
        <address>
          <div className="contact">
            <a href={"mailto:" + email}>{email}</a>
            {phone ? <a href={"tel:" + phone}>{phone}</a> : ""}
          </div>
          {social ? (
          <div className="social">
            {social.website ? <a href={wprefix + social.website} target="_blank">{social.website}</a> : ""}
            {social.linkedin ? <a href={wprefix + social.linkedin} target="_blank">{social.linkedin}</a> : ""}
            {social.github ? <a href={wprefix + social.github} target="_blank">{social.github}</a> : ""}
            {social.gitlab ? <a href={wprefix + social.gitlab} target="_blank">{social.gitlab}</a> : ""}
            {social.twitter ? <a href={wprefix + social.twitter} target="_blank">{social.twitter}</a> : ""}
            {social.instagram ? <a href={wprefix + social.instagram} target="_blank">{social.instagram}</a> : ""}
          </div>
        ) : ""}
        </address>
      </section>
    );
  }
}