import React, {Component} from 'react';
import {string} from'prop-types';

export default class PolyGon extends Component{
    render () {
        const {p,color} = this.props;
        return ( <svg width={250} height={250}>
            <polygon points={p} fill={color}/>
        </svg>)
    }
} 

PolyGon.propTypes={
    p: string,
    color: string 
};

PolyGon.defaultProps ={
    p: "250,60 100,100 30,30",
    color: "red"
};