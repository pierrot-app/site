import * as React from 'react';
import './slider.scss';

interface IntPropsSlider {
  contents: Array<JSX.Element>;
  entities: Entities;
  first: string;
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
    this.state = { displayer: this.props.entities };
    this.switchItem = this.switchItem.bind(this);
  }

  componentDidMount() {
    this.switchItem(this.props.first);
  }

  switchItem (name: string, e?: React.MouseEvent<HTMLDivElement>, index?: number) {
    const display = Object.assign({}, this.props.entities);
    display[name] = 'block';
    this.setState({displayer: display});
  
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
        <div onClick={(e) => this.switchItem(name, e, index)} className="chip"/>
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
        <div className="chips-container">
          <ul className="chips">{chips}</ul>
        </div>
        <div className="items-container">
          <ul className="items">{items}</ul>
        </div>
      </div>
    );
  }
  
}

export default Slider;