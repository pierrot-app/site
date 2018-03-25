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
          <XwButton/>
        </div>
        <div className="content">
          <div className="content-text">
            <div>
              <p>{this.state.titre}</p>
              <img src={Highlight} className="logo-texte" alt="logo with texte" />
            </div>
            <p>{this.state.description1}</p>
            <EmailInput/>
          </div>
          <div className="context-illustration">
            <XwImage image={Hero} background={HeroBackground}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
