import React,{Component} from "react";
 class Input extends Component
 {
     constructor(props)
     {
         super(props)
         this.inputRef=React.createRef()
         this.Clickme=this.Clickme.bind(this)
     }
    Clickme()
    {
        this.inputRef.current.focus()
    }
    
     render()
     {
         return(
             <div>
                <center>
                    <input type="text" ref={this.inputRef}/>   
                    <button onClick={this.Clickme}>click me</button> 
                </center>
             </div>
         )
     }
 }
 
 export default Input