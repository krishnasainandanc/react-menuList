import React,{Component} from "react";

class Access extends Component
{
    render()
    {
        return(
            <h1>{this.props.i} {this.props.x.name} of age {this.props.x.age}</h1>
        );
    }
}
export default Access