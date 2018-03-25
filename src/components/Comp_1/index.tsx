import * as React from 'react';
import './comp1.scss';
import XwImage from './../Elements/XwImage/';
const HowTo1 = require('./../../assets/images/HowTo-1.png');
const HowTo2 = require('./../../assets/images/HowTo-2.png');
const HowTo3 = require('./../../assets/images/HowTo-3.png');
const HowTo1Background = require('./../../assets/images/HowTo-Background-1.svg');
const HowTo2Background = require('./../../assets/images/HowTo-Background-2.svg');
const HowTo3Background = require('./../../assets/images/HowTo-Background-3.svg');
const content = require('./../../assets/texts/content-v1.json');

interface ContentText {
  titre: string;
  description1?: string;
  description2?: string;
  description3?: string;
}

class Comp1 extends React.Component<{}, ContentText> {

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

  render() {
    return (
      <div className="comp-1">
        <div>{this.state.titre}</div>
        <div>
          <div>{this.state.description1}</div>
          <div><XwImage image={HowTo1} background={HowTo1Background}/></div>
        </div>
        <div>
          <div>{this.state.description2}</div>
          <div><XwImage image={HowTo2} background={HowTo2Background}/></div>
        </div>
        <div>
          <div>{this.state.description3}</div>
          <div><XwImage image={HowTo3} background={HowTo3Background}/></div>
        </div>
      </div>
    );
  }
}

export default Comp1;
