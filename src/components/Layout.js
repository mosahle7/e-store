import React from 'react';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {HomeIcon,CartIcon} from './Icons';
import Search from './search';
import { useAuth } from '../context/AuthContext';
import { styled } from 'styled-components'

const Layout = ({categories}) => {
  const {logged, logout} = useAuth();
  const [clickedLink, setClickedLink] = useState(null);
  
  const handleLinkClick = (id) => {
    setClickedLink(id)
  }
  const renderCategories = ()=> {
        return categories.map((c)=> (
          
          <li 
          key={c.id}
          className={c.id === clickedLink? 'clicked' : ''}
          >
          <SLink to={`/categories/${c.id}`} onClick={() => handleLinkClick(c.id)}>{c.title}</SLink></li>
          ));
      };
  return (
    <>
    <header>
      <div id='headerHomeIcon'>
        <Link to='/'><HomeIcon width={40} /></Link>
      </div>

      <Search />
      <div id='headerTitle'>
        mSt Store
      </div>
      <div id='headerCartIcon'>
        <Link to='/basket' ><CartIcon width={40} /></Link>
      </div>

      {logged? (
      <div id='logout'>
      <SLink to='/login' onClick={logout}>
        Logout</SLink>
    </div>):
      (<div id='login'>
      <SLink to='/login' >
        Login/SignUp</SLink>
    </div>)
      }

    </header>
    <section>
      <nav>
       {/* {categories.errorMessage && (
         <div>Error: {categories.errorMessage}</div>
       )} */}
        <ul>
      {
        renderCategories()
      }
        </ul>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </section>
    <footer>
      <div id='my'>mSt Store</div>
      <SLink to='/'>Home</SLink> | <SLink to='/basket'>Basket</SLink>
    </footer>
    </>
  );
};

export default Layout;

const SLink = styled(Link)`
  text-decoration: none;
`