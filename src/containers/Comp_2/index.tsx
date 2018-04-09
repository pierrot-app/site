import * as React from 'react';
import './comp2.scss';
import { INNERHTML } from './../../utils';
import EmailInput from './../../components/EmailInput/';

const content = require('./../../assets/texts/content-v1.json');

interface ContentText {
  titre: string;
  description1?: string;
}

class Comp2 extends React.Component<{}, ContentText> {

  public titreRef: HTMLDivElement | null;
  public descriptionRef: HTMLDivElement | null;

  public constructor(props: {}) {
    super(props);

    const titre = content.COMP_2.titre;
    const description1 = content.COMP_2.description_1;
    this.state = { titre: titre, description1: description1};

  }

  componentDidMount() {

    INNERHTML(this.titreRef, this.state.titre);
    INNERHTML(this.descriptionRef, this.state.description1);

  }

  render() {
    return (
      <div className="comp-2">
        <div className="titre" ref={titreRef => this.titreRef = titreRef}/>
        <div className="description" ref={descriptionRef => this.descriptionRef = descriptionRef}/>
        <EmailInput className="email"/>
      </div>
    );
  }
}

export default Comp2;
