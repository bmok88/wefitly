import React from 'react';
import {render} from 'react-dom';

import {Router, Route, Link, hashHistory} from 'react-router';
import Home from './home.jsx'
import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import TrainerProfile from './trainerProfile.jsx'
<<<<<<< 10fa82048ae10c6a74d482f52fdd334a63890299
import UserDash from './UserDash.jsx'

import FilterBar from './filterBar.jsx'
import TrainerTable from './trainerTable.jsx'
>>>>>>> adds a route to traner table

class App extends React.Component {

  onUserSignUp(postRequestData){
    console.log('user signed up')
  }

  onUserSignIn(postRequestData) {
    console.log('user signed in');
  }

  onTrainerSignUp(postRequestData){
    console.log('trainer signed up');

  }

  onTrainerSignIn(postRequestData){
    console.log('trainer signed in')
  }

  onFilterTrainers(){
    console.log('trainers filtered')
  }


  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/userSignup" component={()=>(
          <Signup endpoint="/api/userSignup" callback={this.onUserSignUp} />
        )}/>
        <Route path="/userSignin" component={() => (
          <Signin endpoint="/api/userSignin" callback={this.onUserSignin} />
        )}/>
        <Route path='/userDash' component={UserDash} />
        <Route path="/trainersignup" component={()=>(
          <Signup endpoint="/api/trainerSignup" callback={this.onTrainerSignUp}/>
        )}/>
        <Route path="/trainersignin" component={()=>(
          <Signin endpoint="/api/trainerSignin" callback={this.onTrainerSignIn}/>
        )}/>
        <Route path="/trainers" component={()=>(
          <TrainerTable endpoint="/api/filterTrainers" callback={this.onFilterTrainers}/>
        )}/>
        <Route path="/trainerprofile" component={TrainerProfile}/>
        <Route path="/" component={Home}/>
      </Router>
    );

  }
}

render(<App/>,document.getElementById('app'));
//this is a comment
