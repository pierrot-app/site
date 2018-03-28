import * as React from 'react';
import './intro.scss';
import XwButton from './../Elements/XwButton/';
import XwImage from './../Elements/XwImage/';
import EmailInput from './../Elements/EmailInput/';
const logoTexte = require('./../../assets/images/Logo-Texte.svg');
const Highlight = require('./../../assets/images/Highlight.png');
const Hero = require('./../../assets/images/Hero.png');
const HeroBackground = require('./../../assets/images/Hero-Background.svg');
const content = require('./../../assets/texts/content-v1.json');

interface ContentText {
  titre: string;
  description1?: string;
}

class Intro extends React.Component<{}, ContentText> {

  public constructor(props: {}) {
    super(props);

    const titre = content.INTRO.titre;
    const description1 = content.INTRO.description_1;
    this.state = { titre: titre, description1: description1};

  }

  /*componentDidMount() {}*/
  /*componentWillUnmount() {}*/

  render() {
    return (
      <div className="intro">
        <div className="en-tete">
          <img src={logoTexte} className="logo-texte" alt="logo with texte" />
          <XwButton className="intro-xw-button"/>
        </div>
        <div className="content">
          <div className="content-text">
            <div>
              <img src={Highlight} className="highlight" alt="logo with texte" />
              <div className="titre">{this.state.titre}</div>
            </div>
            <p>{this.state.description1}</p>
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
