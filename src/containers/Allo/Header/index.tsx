import * as React from 'react';
import './header.scss';
import { TimelineLite, Power1 } from 'gsap';
import { XwButton } from './../../../components/XwButton/';

const logoTexte = require('./../../../assets/images/allo/logo/logo.svg');

interface ContentTextState {
  entitie: number;
  entities: Array<string>;
}

class Header extends React.Component<{}, ContentTextState> {

  public loop: NodeJS.Timer;

  public constructor(props: {}) {
    super(props);

    const entities = ['Paprika', 'Marin', 'Pepin', 'Polochon', 'Jack'];
    this.state = { entitie: 0, entities: entities};
  }

  componentDidMount() {

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
      <div className="header">
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
      </div>
    );
  }
}

export default Header;
