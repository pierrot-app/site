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
      <div className={`${this.props.className} xw-button`}>
        <button>
          <a href="mailto:pierrot-app@edu.gobelins.fr">Demander une démo</a>
        </button>
      </div>
    );
  }
}

export default XwButton;
