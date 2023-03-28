import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';
import'./Navigation.style.scss';
// import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
// import CrwnLogo from '../../../assets/crown.svg
import CrwnLogo from '../../../assets/crown.svg';

 const Navigation = () =>{
    return(

        <Fragment>
        <div className="navigation">
         <Link className="logo-container" to="/">
           <img src={CrwnLogo} alt="Crown logo" className="logo" />
         </Link>
         <div className="nav-links-container">
             <Link className="nav-link" to='/shop' >
             Shop
             </Link> 
             <Link className="nav-link" to="/Sign-in">
             Signin
             </Link>  
            
           </div>
        </div>
        <Outlet />
      
        </Fragment>
    )
 }
 export default Navigation;