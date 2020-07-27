import React, { Component } from 'react';
import Circle from './Circle';
import Rectangle from './Rectange';
import PolyGon from './PolyGon';
import './App.css';
function Shape(props) {
  //const shape= props.shape;
  const parseText=(props.textString).trim();
  const strArr=parseText.split(' ');
  //console.log(strArr.length);
  if(strArr[0]==="c" && strArr.length === 4) {
    return  <Circle x={strArr[1]} y={strArr[2]} rad={strArr[3]}><div style={{color:'green'}}>Syntax</div></Circle>;
  } 
  else if(strArr[0]==="r" && strArr.length === 5) {
    return  <Rectangle x={strArr[1]} y={strArr[2]} width={strArr[3]} height={strArr[4]} color={"cyan"}><div style={{color:'green'}}>Syntax</div></Rectangle>;
  } else if (strArr[0] === 'p' && strArr.length>2) {
    strArr.shift();
    console.log(props.textString.slice(1));
   return  <PolyGon p={props.textString.slice(1).trim()}><div style={{color:'green'}}>Syntax</div></PolyGon>
  } else return <div style={{color:'red'}}>Syntax</div>;
}

export default class App extends Component {
  constructor()
  {
    super();
    this.state={data:''};
    this.handleChange =this.handleChange.bind(this);
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({data: event.target.value});
}
handleSubmit(event){
  alert(this.state.data);
}
  render() {
    return (
    <div className="App">
      <header className="App-header">
                <label>
                  <h1> SVG PLOTTER </h1>
                  <h2>
                    Enter Shape and Coordinates 
                  </h2>
                  <div>
                    c cx cy radius for Circle <br/> r rx ry width height for Rectangle <br/> p px1,py1 px2,py2 ... pxn,pyn for Polygon 
                  </div>
                  <input type="text" data={this.state.data} onChange={this.handleChange}/>
                </label>
      <Shape textString={this.state.data}/>
      </header>
      </div>
  );
  }
};
