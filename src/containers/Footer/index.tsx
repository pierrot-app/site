import * as React from 'react';
import './footer.scss';
import { INNERHTML } from './../../utils';

const logoTexteWhite = require('./../../assets/images/Logo-Texte-White.svg');
const content = require('./../../assets/texts/content-v1.json');

interface Liens {
  lien?: string;
  titre?: string;
  logo?: string;
}

interface ContentText {
  titre: string;
  description1?: string;
  lien1: Liens;
  lien2: Liens;
}

class Footer extends React.Component<{}, ContentText> {

  public titreRef: HTMLDivElement | null;
  public descriptionRef: HTMLDivElement | null;

  public constructor(props: {}) {
    super(props);

    const titre = content.FOOTER.titre;
    const description1 = content.FOOTER.description_1;
    const lien1 = content.FOOTER.lien_1;
    const lien2 = content.FOOTER.lien_2;
    this.state = {titre: titre,
                  description1: description1,
                  lien1: lien1,
                  lien2: lien2};
  }

  componentDidMount() {

    INNERHTML(this.titreRef, this.state.titre);
    INNERHTML(this.descriptionRef, this.state.description1);

  }

  render() {
    return (
      <div className="footer">
        <div className="social-content">
          <img src={logoTexteWhite} className="logo-texte" alt="logo with texte" />
          <div className="social-content-text" ref={titreRef => this.titreRef = titreRef}/>
          <div className="social-content-text" ref={descriptionRef => this.descriptionRef = descriptionRef}/>
        </div>
        {/* <div className="social-link">
          <a href={this.state.lien1.lien}>
            <img className="social-logo" src={require(`./../../assets/images/${this.state.lien1.logo}`)} alt={this.state.lien1.titre}/>
          </a>
          <a href={this.state.lien2.lien}>
            <img className="social-logo" src={require(`./../../assets/images/${this.state.lien2.logo}`)} alt={this.state.lien2.titre}/>
          </a>
        </div> */}
      </div>
    );
  }
}

export default Footer;
