import * as React from 'react';
import './intro.scss';
import { XwImage } from './../../../components/XwImage/';
import EmailInput from './../../../components/EmailInput/';
import { INNERHTML } from './../../../utils';

const content = require('./../../../assets/texts/content-v1.json');
const Highlight = require('./../../../assets/images/Highlight.png');
const Hero = require('./../../../assets/images/Hero-Image.png');
const HeroBackground = require('./../../../assets/images/Hero-Background.svg');

interface ContentTextState {
  titre: string;
  description1?: string;
}

class Intro extends React.Component<{}, ContentTextState> {

  public titreRef: HTMLDivElement | null;
  public descriptionRef: HTMLDivElement | null;

  public constructor(props: {}) {
    super(props);

    const titre = content.ALLO.INTRO.titre;
    const description1 = content.ALLO.INTRO.description_1;
    this.state = { titre: titre, description1: description1};
  }

  componentDidMount() {

    INNERHTML(this.titreRef, this.state.titre);
    INNERHTML(this.descriptionRef, this.state.description1);
  }

  render() {
    return (
      <div className="intro">
        <div className="content">
          <div className="content-text">
              <img src={Highlight} className="highlight" alt="logo with texte" />
              <div className="titre" ref={titreRef => this.titreRef = titreRef}/>
            <div className="description" ref={descriptionRef => this.descriptionRef = descriptionRef}/>
            <EmailInput className="email"/>
          </div>
          <div className="content-illustration">
            <XwImage className="intro-illustration" image={Hero} background={HeroBackground}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
