import React,{Component} from "react";
import Childcomp from "./Childcomp";

class Parentcomp extends Component
{
    constructor()
    {
        super()
        this.state={
            message:"hello"
        }    
        this.func=this.func.bind(this)
    }
    func()
    {
        alert(this.state.message+' world')
    }
    render()
    {
        return(
            <center>
                <div>hello</div>
                <Childcomp fun={this.func}></Childcomp>
            </center>
        );
    }
}
export default Parentcomp