import React, { useState, useEffect } from 'react';
import menulogo from '../Assets/Images/me.png'
import {Link} from 'react-router-dom'

const SideBar = ({  handleContent, sidebarwidth}) => {
    const[fontwidth , setFontwidth]=useState('110%')
    useEffect(() => {
        if(sidebarwidth ==='15%')
        {
         setFontwidth('110%')
        }
        else if(sidebarwidth ==='8.5%')
        {
            setFontwidth('70%')
        }
    },[sidebarwidth])
    return (
        <>
            <div className="sidebar  card-4 bar-block " style={{ width: sidebarwidth, display: "block", zIndex:4 , overflow:'auto',textAlign:'center',fontSize:fontwidth, fontWeight:'bold',background:'linear-gradient(to right, rgb(247, 13, 13) , rgb(252,80,0)'}} id="mySidebar">
                
            <a href="/menu" className="bar-item button padding-16 hover-none " ><img src={menulogo} alt='menu'width='150px' height='70px'/></a>

                <p className="bar-item button padding-16 hover-none "><i className='fas fa-solid fa-hotel margin-right'></i><span>Management</span></p>
                <Link onClick={()=>handleContent('Dashboard')} className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-file margin-right'></i><span>Dashboard</span></Link>
                <Link onClick={()=>handleContent('NewOrders')} className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-thumbs-up margin-right'></i><span>New Orders</span></Link>
                <Link to='/OrderHistory' className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-clipboard margin-right'></i><span>Order History</span></Link>
                <Link to='/Dining' className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-money-bill margin-right'></i><span>Dining</span></Link>
                <Link to='/TakeAway' className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-hotel margin-right'></i><span>Take Away</span></Link>
                <Link to='/Tables' className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-film margin-right'></i><span>Tables</span></Link>
                <Link to='/Categories' className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-inbox margin-right'></i><span>Categories</span></Link>
                <Link onClick={()=>handleContent('AddProduct')} className="bar-item button padding-16 hover-white "><i className='fas fa-solid fa-inbox margin-right'></i><span>Add Dishes</span></Link>

            </div>

        </>
    );
}

export default SideBar;