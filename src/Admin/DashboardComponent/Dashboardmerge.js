
import React, { useState } from 'react'
import SideBar from '..//SideBar'
import Navbar from '../NavBar'
import Dashboard from './Dashboard'
import AddProduct from '../AddProduct/AddProduct'
import NewOrders from '../NewOrders/NewOrders'
import View from '../NewOrders/View'
import data from '../NewOrders/Data.json'
const Dashboardmerge = () => {

    const [content, setContent] = useState('Dashboard');
    const [sidebar , setSidebar]=useState(true);
    const[sidebarwidth , setSidebarwidth]=useState('15%');
    const [navRowWidth, setNavRowWidth] = useState('85%');
    const [orderid, setOrderid] = useState('');

    const handleContent = (content, orderid) => {
        setContent(content);
        setOrderid(orderid);
    }
const handlesidebar=()=>{
if(sidebarwidth === '15%')
{
setSidebarwidth('8.5%');
setNavRowWidth('91.5%');
}
else{
setSidebarwidth('15%');
setNavRowWidth('85%');
}
    }
    return (
      <div>
      <div className='row' style={{ display:'flex' }}>
        {sidebar && (
        <div className='side-row' style={{width:sidebarwidth}} >
            <SideBar handleContent={handleContent} sidebarwidth={sidebarwidth}/>
         </div>)}

         <div className='nav-row' style={{width: navRowWidth}} >
            <Navbar barsClick={handlesidebar}/>
            {content === 'Dashboard' && <Dashboard />}
            {content === 'AddProduct' && <AddProduct />}
            {content === 'NewOrders' && <NewOrders  handleContent={handleContent}/>}
            {content === 'View' && <View  orderid={orderid} data={data} handleContent={handleContent}/>}

         </div >
         
      </div>
    </div>
    )
}

export default Dashboardmerge;