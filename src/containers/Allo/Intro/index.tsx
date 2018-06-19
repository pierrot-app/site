import * as React from 'react';
import './intro.scss';
import { INNERHTML } from './../../../utils';
import { XwButton } from './../../../components/XwButton/';
import { XwImage } from './../../../components/XwImage/';
import EmailInput from './../../../components/EmailInput/';

const logoTexte = require('./../../../assets/images/allo/logo/logo.svg');
const Highlight = require('./../../../assets/images/Highlight.png');
const Hero = require('./../../../assets/images/Hero-Image.png');
const HeroBackground = require('./../../../assets/images/Hero-Background.svg');
const content = require('./../../../assets/texts/content-v1.json');

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

  rollerCaster = (el: Element, duration: number) => {

    console.log(el, duration);
    return '';
  }

  render() {
    return (
      <div className="intro">
        <div className="en-tete">
          <div className="logo">
            <img src={logoTexte} alt="logo with texte" />
            <div className="logo-text">
              <span><b>Allo, </b></span><span>Paprika</span>
            </div>
          </div>
          <XwButton className="intro-xw-button" text="Obtenez le votre"/>
        </div>
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
