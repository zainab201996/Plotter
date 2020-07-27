import React, {Component} from 'react';
import {string} from'prop-types';

export default class Circle extends Component{
    render () {
        const {x,y,rad,color} = this.props;
        return ( <svg width={250} height={250}>
            <circle cx={x} cy={y} r={rad} fill={color}/>
        </svg>)
    }
} 

Circle.propTypes={
    x: string,
    y: string,
    rad: string,
    color: string 
};

Circle.defaultProps ={
    x: '',
    y: '',
    rad: '',
    color: "red"
};