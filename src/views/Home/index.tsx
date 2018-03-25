import * as React from 'react';
import './home.scss';
import Intro from './../../components/Intro/';
import Comp_1 from './../../components/Comp_1/';
import Comp_2 from './../../components/Comp_2/';
import Footer from './../../components/Footer/';

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
