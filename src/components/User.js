import React,{Component} from "react";

class User extends Component
{
    render()
    {
        var m;
        if(Number(this.props.n)===12)
            m=<div>{this.props.children}</div>;
        else
            m=<div>Parent Name Krishna</div>;
        return <div>{m}</div>
    }
}
export default User