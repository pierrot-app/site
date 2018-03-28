import * as React from 'react';
import './footer.scss';
const logoTexteWhite = require('./../../assets/images/Logo-Texte-White.svg');
const content = require('./../../assets/texts/content-v1.json');

interface Liens {
  lien?: string;
  titre?: string;
}

interface ContentText {
  titre: string;
  description1?: string;
  lien1: Liens;
  lien2: Liens;
}

class Footer extends React.Component<{}, ContentText> {

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

  render() {
    return (
      <div className="footer">
        <div className="social-content">
          <img src={logoTexteWhite} className="logo-texte" alt="logo with texte" />
          <p>{this.state.titre}</p>
          <p>{this.state.description1}</p>
        </div>
        <div className="social-link">
          <a href={this.state.lien1.lien}>{this.state.lien1.titre}</a>
          <a href={this.state.lien2.lien}>{this.state.lien2.titre}</a>
        </div>
      </div>
    );
  }
}

export default Footer;
