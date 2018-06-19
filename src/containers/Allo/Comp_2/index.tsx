import * as React from 'react';
import './comp2.scss';

const content = require('./../../../assets/texts/content-v1.json');
const objetImage = require('./../../../assets/images/allo/illustration/allo.png');

class Comp2 extends React.Component<{}, {}> {

  public constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="allo-comp-2">
        <div> {content.ALLO.COMP_2.titre} </div>
        <div> {content.ALLO.COMP_2.description}  </div>
        <div> <img src={objetImage}/></div>
      </div>
    );
  }
  
}

export default Comp2;