import * as React from 'react';
import './about.scss';
import Header from './../../../containers/Allo/Header/';
import Footer from './../../../containers/Allo/Footer/';

class About extends React.Component {
  render() {
    return (
      <div className="allo-about">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default About;
