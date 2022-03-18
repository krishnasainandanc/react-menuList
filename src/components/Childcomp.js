import React,{Component}from "react";

class Childcomp extends Component
{
    render()
    {
        return(
            <button onClick={this.props.fun}>click me</button>
        );
    }
}
export default Childcomp