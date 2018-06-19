import * as React from 'react';
import './sliderContent.scss';

interface IntContent {
    content: ImageContent;
    name: string;
    image: string;
}

interface ImageContent {
  titre: string;
  description: string;
}

class SliderContent extends React.Component<IntContent, {}> {

  public constructor(props: IntContent) {
    super(props);
  }

  render() {
    return (
      <div className="slider-content">
        <div> {this.props.image} </div>
        <div>
          <div> {this.props.content.titre} </div>
          <div> {this.props.content.description} </div>
        </div>
      </div>
    );
  }
  
}

export default SliderContent;
