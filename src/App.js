import React,{ Component } from 'react';
import './App.css';
import FindItem from './components/FindItem/FindItem';
import LostItem from './components/LostItem/LostItem';
import ShowPost from '../src/components/ShowPost/ShowPost'

import SignupPage from './components/SignupPage/SignupPage';
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import EditPost from './components/EditPost/EditPost';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import userService from './utils/userService';


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
 
  render() {
    return (
      <div className="App">
    

          <NavBar user={this.state.user} handleLogout={this.handleLogout}/>

        
        {this.state.user ? 
        <>
          <h1 className="h1-app"><em>Current user: {this.state.user.name}</em></h1>
          <Link className='link-app' to={'/find'}><i class="fas fa-paperclip"></i>Found</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-question-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='link-app' to={'/lost'}>Lost<i class="fas fa-search"></i></Link>
        </>  
        :
        <>
          <h1>Find & Lost</h1>
          <p>Please Login or SignUp</p>
        </>  
        }
        <p className="p-app">
        This web-site help you to find your item...
        <br/>
        If you found any items click find...
        <br/>
        If you lost any items any try to find it click Lost...
        </p>
       

        <Switch>
        <Route exact path='/lost' component={ LostItem } />
        <Route exact path='/find' render={ () =>  
          userService.getUser() ?
            <FindItem />
            :  
            <Redirect to='/login'/>
        } />

        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact
                path='/posts/:id' 
                render={props => <ShowPost {...props} />}
             />
           <Route
            exact
            path="/posts/:id/edit"
            render={props => <EditPost {...props} />}
          />
        </Switch>
        
      </div>
    );
  }
}
export default App;
