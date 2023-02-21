import Messagings from "../pages/Messagings";
import Network from '../pages/Network';
import Home from '../components/layout/Home';
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";
import Jobs from '../pages/Jobs';
import Login from '../components/layout/Login'


const routes = [
    { path: '/home', component: Home },
    { path: '/', component: Login, layout:null },
    { path: '/mynetwork', component: Network },
    { path: '/jobs', component: Jobs },
    { path: '/profile', component: Profile },
    { path: '/notifications', component: Notification,},
    { path: '/messagings', component: Messagings },
];



export  {routes};


