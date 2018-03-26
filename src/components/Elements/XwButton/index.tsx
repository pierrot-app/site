import * as React from 'react';
import './xw-button.scss';

interface Style {
  className: string;
}

class XwButton extends React.Component<Style, {}> {

  constructor(props: Style) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <button>demander un démo</button>
      </div>
    );
  }
}

export default XwButton;
