import * as React from 'react';
import './sliderContent.scss';
import { INNERHTML } from './../../../utils';

interface IntContent {
    content: ImageContent;
    name: string;
    image: string;
}

interface ImageContent {
  titre: string;
  description: string;
}

interface ContentTextState {
  description1?: string;
}

class SliderContent extends React.Component<IntContent, ContentTextState> {

  public descriptionRef: HTMLDivElement | null;

  public constructor(props: IntContent) {
    super(props);
    const description1 = this.props.content.description;
    this.state = { description1: description1};
  }

  componentDidMount() {

    INNERHTML(this.descriptionRef, this.state.description1);

  }

  render() {
    return (
      <div className="slider-content">
        <div className="images-container"> 
          <img src={this.props.image}/>
        </div>
        <div className="texts-container">
          <div className="titre"> {this.props.content.titre} </div>
          <div className="description" ref={descriptionRef => this.descriptionRef = descriptionRef}/>
        </div>
      </div>
    );
  }
  
}

export default SliderContent;
