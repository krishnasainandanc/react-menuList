import React,{useState} from 'react'
import Menu from './menuApi'
// import MenuCard from './menuCard';
import Navbar from './Navbar';
const Resturant = () => {
    const [menuData,setMenudata]=useState(Menu);
    const d = [...new Set (Menu.map( (c) => c.category ))];
    console.log(Menu)
    return (
        <div>
            <Navbar list={d}/>
            {/* <MenuCard menuData={Menu}/> */}
        </div>
    )
}

export default Resturant
