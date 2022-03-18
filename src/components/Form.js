import React,{Component} from "react";
import './s.css'

class Form extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"",
            usn:"",
            area:"",
            s:""
        }
        this.handleName=this.handleName.bind(this)
        this.handleS=this.handleS.bind(this)
        this.handleUsn=this.handleUsn.bind(this)
        this.handleArea=this.handleArea.bind(this)
        this.Click=this.Click.bind(this)
    }
    Click()
    {
        alert("name : "+this.state.name+"\nUSN : "+this.state.usn+"\nArea : "+this.state.area+"\n S : "+this.state.s);
    }
    handleS(event)
    {
        this.setState({
            s:event.target.value
        })
    }
    handleName(event)
    {
        this.setState({
            name:event.target.value
        })
    }
    handleUsn(event)
    {
        this.setState({
            usn:event.target.value
        })
    }
    handleArea(event)
    {
        this.setState({
            area:event.target.value
        })
    }
    render()
    {
        return(
            <form>
            <table className="primary">
                <tr>
                    <td><label>Enter Ur Name  :  </label></td>
                    <td><input id="name" type="Text" value={this.state.name} onChange={this.handleName} /></td>
                </tr>
                <tr>
                    <td>Enter ur Usn : </td>
                    <td><input id="usn" type="text" value={this.state.usn} onChange={this.handleUsn}/></td>
                </tr>
                <tr>
                    <td>Comments  :  </td>
                    <td><textarea rows="10" cols="10" type="text" value={this.state.area} onChange={this.handleArea}></textarea></td>
                </tr>
            
                <tr>
                    <td>Select  : </td>
                    <td>
                        <select value={this.state.s} onChange={this.handleS}>
                            <option value="krishna">KRISHNA</option>
                            <option value="sai">SAI</option>
                            <option value="nandan">NANDAN</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td><button onClick={this.Click}>Click me</button></td>
                </tr>
               </table>
            </form>
        );
    }
}
export default Form