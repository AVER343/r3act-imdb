import { Link } from 'react-router-dom';
import React from 'react'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
const Header=({currentUser})=> {
    return(<div className='header'>
                <div className='options'>
                    <Link className='option' to='/'>
                    HOMEPAGE
                    </Link>
                    {
                        currentUser? <Link className='option' to='/favourites'>FAVOURITES</Link>:null
                    }
                    {
                        currentUser?
                        <div className="option" onClick={()=>auth.signOut()} > LOGOUT </div>
                        : <Link className='option' to='/signin'>
                        SIGN IN
                      </Link>
                    }
                </div>
            </div>
  );}
  const mapStateToProps = ()=>createStructuredSelector({
    currentUser:selectCurrentUser
  })
export default  connect(mapStateToProps)(Header)