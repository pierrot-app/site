import * as React from 'react';
import './home.scss';
import Intro from './../../../containers/Allo/Intro/';
import Footer from './../../../containers/Allo/Footer/';
import Comp_1 from './../../../containers/Allo/Comp_1/';
import Comp_2 from './../../../containers/Allo/Comp_2/';
import Comp_3 from './../../../containers/Allo/Comp_3/';

class Home extends React.Component {
  render() {
    return (
      <div className="allo-home">
        <Intro/>
        <Comp_1/>
        <Comp_2/>
        <Comp_3/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
