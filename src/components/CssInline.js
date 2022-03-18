import React,{Component} from "react";
import './s.css'
class CssInline extends Component
{
    render()
    {
        const heading={
            color:'red',
            fontSize:'720 px' 
        }
        return(
            <div>
                <div style={heading}>Hello hi i am Krishna sai Nandan</div>
                <div className="primary">Hello hi i am Krishna sai Nandan</div>
            </div>
        );
    }
}
export default CssInline;
