import * as React from 'react';
import './xw-image.scss';

interface ListImages {
  image: string;
  background: string;
}

class XwIimage extends React.Component<ListImages, {}> {

  constructor(props: ListImages) {
    super(props);
  }

  render() {
    return (
      <div className="xw-image">
        <img src={this.props.background} className="image" alt="image" />
        <img src={this.props.image} className="background" alt="background" />
      </div>
    );
  }

}

export default XwIimage;
