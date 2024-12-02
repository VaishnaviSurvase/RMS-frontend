import Menu from '../Assets/Images/me.png';
import { Link } from 'react-router-dom'


const NavBar = ({ barsClick, LoginClick }) => {
  return (
      <div className='card' style={{ width: '100%'}}>
        <div className='menu' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className='fas fa-solid fa-bars' onClick={barsClick} style={{ marginLeft: '40px', fontSize: '30px' }}></i>
            <img src={Menu} alt="menu icon" width="40px" height="40px" style={{ marginLeft: "30px", marginBottom: "4px" }} />
            <i className='fas fa-solid fa-headset ' style={{ marginLeft: "250px", fontSize: '25px' }} ></i>
            <i className='fas fa-solid fa-user ' style={{ marginLeft: "50px", fontSize: '25px' }}></i>
          </div>
          <Link to='/AdminLogin' onClick={LoginClick} style={{ marginRight: "100px", marginTop: "20px", textDecoration: 'none', padding: '15px', fontSize: '20px', fontWeight: 'bold' }}>Login</Link>
        </div>
      </div>

  );
}

export default NavBar;