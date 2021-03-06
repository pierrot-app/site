import * as React from 'react';
import './home.scss';
import Intro from './../../containers/Intro/';
import Comp_1 from './../../containers/Comp_1/';
import Comp_2 from './../../containers/Comp_2/';
import Footer from './../../containers/Footer/';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Intro/>
        <Comp_1/>
        <Comp_2/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
