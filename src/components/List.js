import React,{Component} from "react";
import Access from "./Access";

class List extends Component
{
    render()
    {
        //var name=["krishna ","sai ","Nandan ","Priya1 "]
        var nameList=[
            {
                id:1,
                name:"krishna",
                age:20
            },{
                id:2,
                name:"sai",
                age:21
            },{
                id:3,
                name:"nandan",
                age:18
            },{
                id:4,
                name:"Priya",
                age:25
            },
            {
                id:5,
                name:"Priya",
                age:25
            }
        ]
        /*
        process 1
        return(
        <center>
            <div>
                {name.map(x=><h1>{x}</h1>)}
            </div>
        </center>
        );*/
        /*
        Process 2
        var name1=name.map(x=><h1>{x}</h1>)
        return(
            <center>
                <div>
                    {name1}
                </div>
            </center>
        );*/

        /*
        process 3
        var nameList1=nameList.map(x=><h1>{x.name} of age {x.age}</h1>)
        return(
            <center>
                <div>
                    {nameList1}
                </div>
            </center>
        );*/
        return(
           <div>{nameList.map((x,i)=><Access key={x.id} x={x} i={i}/>)}</div>
        );

    }
}
export default List