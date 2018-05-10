import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import LoginForm from './components/LoginForm';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import EventCreate from './components/EventCreate';
import EventEdit from './components/EventEdit';
import EventList from './components/EventList';
import Settings from './components/Settings';
import SignUpForm from './components/SignUpForm';
import Profile from './components/Profile';
import Joined from './components/Joined';
import Created from './components/Created';
import Search from './components/Search';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TabIcon1 = ({}) => {
    return (
       <EvilIcons name='navicon' color='#fff' size={36} />
    );
};
const TabIcon2 = ({}) => {
    return (
       <EvilIcons name='search' color='#fff' size={36} />
    );
};

const TabIcon3 = ({}) => {
    return (
       <EvilIcons name='user' color='#fff' size={36} />
    );
};

const NavIcon = ({}) => {
    return (
       <EvilIcons name='plus' color='#2699fb' size={36} />
    );
};

const ProfileIcon1 = ({}) => {
    return (
       <EvilIcons name='gear' color='#2699fb' size={36} />
    );
};

const ProfileIcon2 = ({}) => {
    return (
       <EvilIcons name='pencil' color='#2699fb' size={36} />
    );
};

const RouterComponent = () => {
    return (
    <Router>
        <Scene key="root" hideNavBar>  
          <Scene key="auth" >
                <Scene key="login" component={LoginForm} title="Please Login"  hideNavBar/>
                <Scene key="signup" component={SignUpForm} hideNavBar/>
                <Scene 
                      key="userCreate" 
                      component={UserCreate} 
                      title="Create User"
                      hideNavBar
                      />
          </Scene>

        <Scene key = "Main" 
            tabs 
            swipeEnabled = {false}
            tabBarPosition='bottom' 
            activeBackgroundColor = '#7bc1fc'
            tabBarStyle = {{backgroundColor: '#2699fb'}}
            labelStyle = {{color: '#fff', fontSize: 12}}
            showLabel = {false}
            hideNavBar>
            <Scene key="Feed">    
                    <Scene
                    rightTitle = {NavIcon}
                    onRight={() => { Actions.eventCreate() }}
                    key="eventList" 
                    component={EventList} 
                    initial
                    icon = {TabIcon1}
                    />
                    <Scene 
                    key="eventCreate" 
                    component={EventCreate} 
                    title="Create Event" 
                    titleStyle = {{color: '#2699fb'}}
                    navBarButtonColor = '#2699fb'
                    icon = {TabIcon1}
                    />
            </Scene>
            <Scene
         key="Search" 
         component={Search} 
         icon = {TabIcon2}
         hideNavBar
         />
         <Scene key="Profile">
         <Scene
                navigationBarStyle={{backgroundColor:'#f1f9ff', elevation: 0}}
                rightTitle = {ProfileIcon1}
                onRight={() => { Actions.Settings() }}
                leftTitle = {ProfileIcon2}
                key="Your Profile" 
                component={Profile}
                icon = {TabIcon3}
         />
         <Scene 
                key="userEdit" 
                component={UserEdit} 
                title="Edit User "
                titleStyle = {{color: '#2699fb'}}
                navBarButtonColor = '#2699fb'
                icon = {TabIcon3}
                />
                <Scene 
                key="Joined" 
                component={Joined} 
                title="Joined Events" 
                titleStyle = {{color: '#2699fb'}}
                navBarButtonColor = '#2699fb'
                icon = {TabIcon3}
                />
                <Scene 
                key="Created" 
                component={Created} 
                title="Created Events"
                titleStyle = {{color: '#2699fb'}}
                navBarButtonColor = '#2699fb'
                icon = {TabIcon3}
                />
                <Scene 
                key="eventEdit" 
                component={EventEdit} 
                title="Edit Event" 
                icon = {TabIcon3}
                />
                 <Scene 
                key="Settings" 
                component={Settings} 
                title="Settings "
                titleStyle = {{color: '#2699fb'}}
                navBarButtonColor = '#2699fb'
                icon = {TabIcon3}
                />
         </Scene>
          </Scene>
         </Scene>
    </Router>
    );
};

export default RouterComponent;