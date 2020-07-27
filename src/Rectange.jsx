import React, {Component} from 'react';
import {string} from'prop-types';

export default class Rectangle extends Component{
    render () {
        const {width,height,x,y,color} = this.props;
        return ( <svg width={250} height={250} padding={100}>
            <rect width={width} height={height} x={x} y={y} fill={color}/>
        </svg>)
    }
} 

Rectangle.propTypes={
    width: string,
    height: string,
    x: string,
    y: string,
    color: string 
};

Rectangle.defaultProps ={
    width:'',
    height:'',
    x: '',
    y: '',
    color: "red"
};