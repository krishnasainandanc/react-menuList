import React,{Component} from "react"

class Setstate extends Component
{
    constructor()
    {
        super()
        this.state={
            n:10
        }
    }
    func()
    {
        this.setState({
            n :this.state.n+1
        })
    }
    render()
    {
        return(
            <div>
                <center>
                    <h1>{this.state.n}</h1>
                    <button onClick={()=> this.func()}>Click me</button>
                </center>
            </div>
        );
    }
}
export default Setstate