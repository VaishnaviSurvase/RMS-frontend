import React ,{useState} from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import AddProduct from './AddProduct';

const ProductListmerge = () => {
    const[sidebar, setSidebar]=useState(true);
    const handlesidebar=()=>{
        setSidebar(!sidebar);
    }
  return (
    <div>
      <div className='row' style={{ display:'flex' }}>
        {sidebar && (
        <div className='side-row' style={{width:'15%'}} >
            <SideBar catClick={handlesidebar}/>
         </div>)}

         <div className='nav-row' style={{width: sidebar ? '90%' : '100%'}} >
            <NavBar barsClick={handlesidebar}/>
            <AddProduct />
         </div >
         
      </div>
    </div>
  );
}

export default ProductListmerge;