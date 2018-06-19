import * as React from 'react';
import './slider.scss';

interface IntPropsSlider {
    contents: Array<JSX.Element>;
}

interface IntStateSlider {
  displayer: Entities;
}

interface Entities {
  paprika: string;
  marin: string;
  pepin: string;
  polochon: string;
  jack: string;
}

class Slider extends React.Component<IntPropsSlider, IntStateSlider> {

  public constructor(props: IntPropsSlider) {
    super(props);
    this.state = { displayer: { paprika: 'block', marin: 'none', pepin: 'none', polochon: 'none', jack: 'none'} };
    this.switchItem = this.switchItem.bind(this);
  }

  switchItem (e: React.MouseEvent<HTMLDivElement>, index: number, name: string) {
    const display = {paprika: 'none', marin: 'none', pepin: 'none', polochon: 'none', jack: 'none'};
    display[name] = 'block';
    this.setState({displayer: {paprika: display.paprika, marin: display.marin, pepin: display.pepin, polochon: display.polochon, jack: display.jack}});
  }

  createItem = (el: JSX.Element, index: number, name: string) => {
    const style: React.CSSProperties = {display: this.state.displayer[name]};
    const item = (
      <li key={index} id={name} style={style}>
        <div>{el}</div>
      </li>
    );
    return item ;
  }

  createChip = (el: JSX.Element, index: number, name: string) => {
    const chip = (
      <li key={index} >
        <div onClick={(e) => this.switchItem(e, index, name)} className="chip"/>
      </li>
    );
    return chip;
  }

  render() {
    const items = this.props.contents.map((el, index) => {
        const item = this.createItem(el, index, el.props.name);
        return item;
    });

    const chips = this.props.contents.map((el, index) => {
      const chip = this.createChip(el, index, el.props.name);
      return chip;
  });

    return (
      <div className="slider">
        <ul className="chips">{chips}</ul>
        <ul className="items">{items}</ul>
      </div>
    );
  }
  
}

export default Slider;
