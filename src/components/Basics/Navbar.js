import React,{useState} from 'react'
import './q.css'
import Menu from './menuApi'
import MenuCard from './menuCard';
const Navbar = ({list}) => {
    const [current,setcurrent]= useState(Menu)
    console.log(list);
    const breakfast = (cat) =>
    {
       const update = Menu.filter(( c) => {
           return c.category===cat
       })
       setcurrent(update)
    }
    return ( 
        <div className='hello'>
        <div className='d12'>
        {
            list.map( (ci) =>{
                return(
                    <>
                        <div className='d11' onClick={ () =>breakfast(ci)}>{ci}</div>
                    </>
                );
            } )
        }
            <div className='d11' onClick={ () =>setcurrent(Menu)}>All</div>
            
        </div>
       
        <MenuCard menuData={current}/>
        
        </div>

    )
}

export default Navbar
