import * as React from 'react';
import './comp1.scss';
import { INNERHTML } from './../../../utils';
import { XwImage } from './../../../components/XwImage/';

const HowTo1 = require('./../../../assets/images/HowTo-1.png');
const HowTo2 = require('./../../../assets/images/HowTo-2.png');
const HowTo3 = require('./../../../assets/images/HowTo-3.png');
const HowTo1Background = require('./../../../assets/images/HowTo-Background-1.svg');
const HowTo2Background = require('./../../../assets/images/HowTo-Background-2.svg');
const HowTo3Background = require('./../../../assets/images/HowTo-Background-3.svg');
const content = require('./../../../assets/texts/content-v1.json');

interface ContentText {
  titre: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

class Comp1 extends React.Component<{}, ContentText> {

  public titreRef: HTMLDivElement | null;
  public description1Ref: HTMLDivElement | null;
  public description2RefDesk: HTMLDivElement | null;
  public description2RefMobile: HTMLDivElement | null;
  public description3Ref: HTMLDivElement | null;

  public constructor(props: {}) {
    super(props);

    const titre = content.COMP_1.titre;
    const description1 = content.COMP_1.description_1;
    const description2 = content.COMP_1.description_2;
    const description3 = content.COMP_1.description_3;
    this.state = {titre: titre,
                  description1: description1,
                  description2: description2,
                  description3: description3};
                  }

  componentDidMount() {

    INNERHTML(this.titreRef, this.state.titre);
    INNERHTML(this.description1Ref, this.state.description1);
    INNERHTML(this.description2RefDesk, this.state.description2);
    INNERHTML(this.description2RefMobile, this.state.description2);
    INNERHTML(this.description3Ref, this.state.description3);

  }

  render() {
    return (
      <div className="comp-1">
        <div className="comp-1-titre" ref={titreRef => this.titreRef = titreRef}/>
        <div className="comp-1-content1">
          <XwImage className="howto1" image={HowTo1} background={HowTo1Background}/>
          <div className="comp-1-description1" ref={description1Ref => this.description1Ref = description1Ref}/>
        </div>
        <div className="comp-1-content2 desk">
          <div className="comp-1-description2" ref={description2RefDesk => this.description2RefDesk = description2RefDesk} />
          <div><XwImage className="howto2" image={HowTo2} background={HowTo2Background}/></div>
        </div>
        <div className="comp-1-content2 mobile">
          <div><XwImage className="howto2" image={HowTo2} background={HowTo2Background}/></div>
          <div className="comp-1-description2" ref={description2RefMobile => this.description2RefMobile = description2RefMobile} />
        </div>
        <div className="comp-1-content3">
          <div><XwImage className="howto3" image={HowTo3} background={HowTo3Background}/></div>
          <div className="comp-1-description3" ref={description3Ref => this.description3Ref = description3Ref}/>
        </div>
      </div>
    );
  }
}

export default Comp1;
