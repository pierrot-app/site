import * as React from 'react';
import './team.scss';
import Header from './../../../containers/Allo/Header/';
import Footer from './../../../containers/Allo/Footer/';

class Team extends React.Component {
  render() {
    return (
      <div className="allo-team">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default Team;
