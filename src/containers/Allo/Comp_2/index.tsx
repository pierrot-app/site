import * as React from 'react';
import './comp2.scss';
import { INNERHTML } from './../../../utils';

const content = require('./../../../assets/texts/content-v1.json');
const objetImage = require('./../../../assets/images/allo/illustration/allo.png');

interface ContentTextState {
  description1?: string;
}

class Comp2 extends React.Component<{}, ContentTextState> {

  public descriptionRef: HTMLDivElement | null;

  public constructor(props: {}) {
    super(props);
    const description1 = content.ALLO.COMP_2.description;
    this.state = { description1: description1};
  }

  componentDidMount() {
    INNERHTML(this.descriptionRef, this.state.description1);
  }

  render() {
    return (
      <div className="allo-comp-2">
        <div className="titre-comp-2"> {content.ALLO.COMP_2.titre} </div>
        <div className="description-comp-2" ref={descriptionRef => this.descriptionRef = descriptionRef} />
        <div className="image-comp-2">
          <img src={objetImage}/>
        </div>
      </div>
    );
  }
  
}

export default Comp2;