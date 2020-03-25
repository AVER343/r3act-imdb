import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FavouritesPage from './pages/favourites/favourites.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
import HomePage from './pages/homePage/homePage.components'
import SignInAndSignUpPage from './pages/signInAndSignUp/signInAndSignUp.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
class App extends React.Component {
  unsubscribeFromAuth = null;
      componentDidMount() {
        const {setCurrentUser}=this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
    
            userRef.onSnapshot(snapShot => {
              setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
              });
            });
          }
          setCurrentUser(userAuth);
        });
      }
      componentWillUnmount(){
          this.unsubscribeFromAuth=null
      }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' render={()=>(this.props.currentUser?<Redirect to='/'></Redirect>:<SignInAndSignUpPage/>)}/>
          <Route path='/favourites'component={FavouritesPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);