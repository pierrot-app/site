import * as React from 'react';
import './comp1.scss';

import Slider from './../../../components/Slider/';
import SliderContent from './../../../components/Slider/Content/';

const content = require('./../../../assets/texts/content-v1.json');
const paprikaImage = require('./../../../assets/images/allo/illustration/paprika.png');
const marinImage = require('./../../../assets/images/allo/illustration/marin.png');
const pepinImage = require('./../../../assets/images/allo/illustration/pepin.png');
const polochonImage = require('./../../../assets/images/allo/illustration/polochon.png');
const jack = require('./../../../assets/images/allo/illustration/jack.png');

class Comp1 extends React.Component<{}, {}> {

  public constructor(props: {}) {
    super(props);
  }

  render() {

    const contents: Array<JSX.Element> = [
        <SliderContent key="0" content={content.ALLO.COMP_1.paprika} image={paprikaImage} name="paprika"/>,
        <SliderContent key="2" content={content.ALLO.COMP_1.marin} image={marinImage} name="marin" />,
        <SliderContent key="3" content={content.ALLO.COMP_1.polochon} image={polochonImage} name="polochon" />,
        <SliderContent key="4" content={content.ALLO.COMP_1.jack} image={jack} name="jack" />,
        <SliderContent key="5" content={content.ALLO.COMP_1.pepin} image={pepinImage} name="pepin" />
    ];

    const entities = { paprika: 'none', marin: 'none', pepin: 'none', polochon: 'none', jack: 'none'};

    return (
      <div className="allo-comp-1">
        <div>
          <div> {content.ALLO.COMP_1.titre} </div>
          <div> {content.ALLO.COMP_1.description} </div>
        </div>
        <Slider contents={contents} entities={entities} first="paprika" />
      </div>
    );
  }
  
}

export default Comp1;
