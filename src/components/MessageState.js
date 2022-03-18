import React,{Component} from 'react'

class MessageState extends Component
{
    constructor()
    {
        super();
        this.state={
            name:10
        }
    }
    func()
    {
        this.setState({
            name :this.state.name+1
        })
    }
    render()
    {
        return(
            <div>
            <center>
                <h1>{this.state.name}</h1>
                <button  onClick={ () => this.func()}>Click me</button>
            </center>
            </div>
        );
    }
}

export default MessageState;