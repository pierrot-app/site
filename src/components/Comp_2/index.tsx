import * as React from 'react';
import './comp2.scss';
import EmailInput from './../Elements/EmailInput/';
const content = require('./../../assets/texts/content-v1.json');

interface ContentText {
  titre: string;
  description1?: string;
}

class Comp2 extends React.Component<{}, ContentText> {

  public constructor(props: {}) {
    super(props);

    const titre = content.COMP_2.titre;
    const description1 = content.COMP_2.description_1;
    this.state = { titre: titre, description1: description1};

  }

  render() {
    return (
      <div className="comp-2">
        <div className="titre">{this.state.titre}</div>
        <div className="description">{this.state.description1}</div>
        <EmailInput className="email"/>
      </div>
    );
  }
}

export default Comp2;
