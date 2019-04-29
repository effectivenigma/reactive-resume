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
      <section className="profile">
        <h1>{name}</h1>
        <address>
          <div className="contact">
            <a href={"mailto:" + email}>{email}</a>
            {phone ? <a href={"tel:" + phone}>{phone}</a> : ""}
          </div>
          {social ? (
          <div className="social">
            {social.website ? <a href={social.website}>{social.website}</a> : ""}
            {social.linkedin ? <a href={social.linkedin}>{social.linkedin}</a> : ""}
            {social.github ? <a href={social.github}>{social.github}</a> : ""}
            {social.gitlab ? <a href={social.gitlab}>{social.gitlab}</a> : ""}
            {social.twitter ? <a href={social.twitter}>{social.twitter}</a> : ""}
            {social.instagram ? <a href={social.instagram}>{social.instagram}</a> : ""}
          </div>
        ) : ""}
        </address>
      </section>
    );
  }
}