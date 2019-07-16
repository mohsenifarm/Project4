import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <nav className={`nav-naz`} class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={'/'} className={'nav-logo'} clkss="navbar-brand" href="#">Find And Lost</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT  <i class="fas fa-sign-out-alt"></i></Link>
        <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
  </nav>
    :


<nav className={`nav-naz`} class="navbar navbar-expand-lg navbar-light bg-light">
<Link className={'nav2-logo'} clkss="navbar-brand" href="#">Find And Lost</Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item active">
  <Link to='/signup' className='nav-link payam'><i class="fas fa-user-plus"></i>  SIGN UP</Link>
  </li>
  <li class="nav-item active">
  <Link to='/login' className='nav-link'><i class="fas fa-sign-in-alt"></i>   login</Link>
  </li>
</ul>
</div>
</nav> 

    

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {nav}
    </nav>
  );
};

export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = (props) => {
//   let nav = props.user ?
//   <div className="div nav">
//     <button type="button" className="btn btn-outline-primary">
//       <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
//     </button>
//   </div>
//     :
//   <div>
//       <Link to='/login' className='NavBar-link'>LOG IN</Link>
//         &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
//     </div>;

//   return (
//     <div className='NavBar'>
//       {nav}
//     </div>
//   );
// };

// export default NavBar;