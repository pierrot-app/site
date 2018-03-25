import * as React from 'react';
import './email-input.scss';

class EmailInput extends React.Component {
  render() {
    return (
      <div className="email-input">
        <form action="">
          <input type="text" placeholder="Entrez votre addresse email" />
          <input type="submit" value="ça m'interesse" />
        </form>
      </div>
    );
  }
}

export default EmailInput;
