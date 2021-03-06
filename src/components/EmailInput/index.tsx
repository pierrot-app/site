import * as React from 'react';
import './email-input.scss';

interface EmailInputProps {
  className: string;
}

interface EmailInputState {
  value: string;
}

class EmailInput extends React.Component<EmailInputProps, EmailInputState> {

  constructor(props: EmailInputProps) {
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
         this.setState({value: 'c\'est enregistré, merci ! '});
         // HACK
         setTimeout(() => {
          this.setState({value: ''});
         },         3000);

        })
       .catch(error =>  error.message);
   }

 }

  render() {
    return (
      <div className={`${this.props.className} email-input`}>
        <input className="input-text" type="text" value={this.state.value} onChange={e => this.handleChange(e)} placeholder="Entrez votre email"/>
        <button className="input-submit" type="submit" onClick={e => this.handleSubmit(e)}>&#199;a m'int&#233;resse</button>
      </div>
    );
  }
}

export default EmailInput;
