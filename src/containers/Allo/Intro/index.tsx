import * as React from 'react';
import './intro.scss';
import { TimelineLite, Power1 } from 'gsap';
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
  entitie: number;
  entities: Array<string>;
}

class Intro extends React.Component<{}, ContentTextState> {

  public titreRef: HTMLDivElement | null;
  public descriptionRef: HTMLDivElement | null;
  public loop: NodeJS.Timer;

  public constructor(props: {}) {
    super(props);

    const titre = content.ALLO.INTRO.titre;
    const description1 = content.ALLO.INTRO.description_1;
    const entities = ['Paprika', 'Marin', 'Pepin', 'Polochon', 'Jack'];
    this.state = { titre: titre, description1: description1, entitie: 0, entities: entities};
  }

  componentDidMount() {

    INNERHTML(this.titreRef, this.state.titre);
    INNERHTML(this.descriptionRef, this.state.description1);
    var el = document.getElementById('entitie_animated');
    this.rollerCaster(el!, 3500);

  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  rollerCaster = (el: HTMLElement, duration: number) => {

    this.loop = setInterval(() => {
      let entitie = this.state.entitie;
      if (this.state.entitie < this.state.entities.length - 1) {
        entitie = this.state.entitie + 1;
      } else {
        entitie = 0;
      }
      const tl = new TimelineLite();
      const fadeOut = tl.to(el, 0.5, {ease: Power1.easeOut, y: -10, opacity: 0, onComplete: () => {
        this.setState({entitie: entitie});
        fadeOut.reverse();
      }});
    },                      duration);

  }

  render() {
    return (
      <div className="intro">
        <div className="en-tete">
          <div className="logo">
            <img src={logoTexte} alt="logo with texte" />
            <div className="logo-text">
              <div className="allo"><b>Allo, </b></div>
              <div id="entitie_animated" className={'entitie ' + this.state.entities[this.state.entitie]}>{this.state.entities[this.state.entitie]}</div>
            </div>
          </div>
          <XwButton className="intro-xw-button" text="Obtenir le votre"/>
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
