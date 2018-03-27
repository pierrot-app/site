import * as React from 'react';
import './email-input.scss';

class EmailInput extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props);
  }

  public sendEmail() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxZC-0f0m5QgehyFWWcM6SPVV8BNyfDogEpu80gFrEPzQSOhHgI/exec';
    const form = document.forms['submit-to-google-sheet'];
    form.addEventListener('submit', (event: Event) => {
      console.log(event, form);
      event.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
    });

  }

  render() {
    return (
      <div className="email-input">
        <form name="submit-to-google-sheet">
          <input className="input-text" type="text" name="email" placeholder="Entrez votre addresse email"/>
          <button className="input-submit" type="submit" onClick={this.sendEmail}>ça m'interesse</button>
        </form>
      </div>
    );
  }
}

export default EmailInput;
