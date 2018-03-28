import * as React from 'react';
import './email-input.scss';

interface EmailInputState {
  value: string;
}

class EmailInput extends React.Component<{}, EmailInputState> {

  constructor(props: {}) {
    super(props);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    this.setState({value: event.target.value});

  }

  public handleSubmit(event: React.FormEvent<HTMLButtonElement>) {

   event.preventDefault();
   if (this.state.value !== '') {
     const scriptURL = 'https://script.google.com/macros/s/AKfycbxZC-0f0m5QgehyFWWcM6SPVV8BNyfDogEpu80gFrEPzQSOhHgI/exec';
     const formData = new FormData();
     formData.append('email', this.state.value);
     fetch(scriptURL, { method: 'POST', body: formData })
       .then(response => {
         this.setState({value: ''});
        })
       .catch(error =>  error.message);
   }

 }

  render() {
    return (
      <div className="email-input">
        <input className="input-text" type="text" value={this.state.value} onChange={e => this.handleChange(e)} placeholder="Entrez votre addresse email"/>
        <button className="input-submit" type="submit" onClick={e => this.handleSubmit(e)}>ça m'interesse</button>
      </div>
    );
  }
}

export default EmailInput;
