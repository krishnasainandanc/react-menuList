//import { Component } from "react";
import React,{Component} from 'react'

class Greet extends Component
{
    render()
    {
        return(
        <center>    
             {this.props.children}
            <h1>C Krishna Sai Nandan {this.props.name} and Studying in {this.props.class} </h1>
            <h1>College name is {this.props.college}</h1>
           
        </center>
        );
    }
}

export default Greet;