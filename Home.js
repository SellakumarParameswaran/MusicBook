import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import InstrumentsList from './../src/InstrumentsList';
import Login from './../src/Login';
import './Home.css';
import Header from './Header/Header';
import TopContainer from './TopContainer/TopContainer';
import KeysChord from './Keys&Chord/KeysChord';
import Feadback from './Feadback';
import Contact from './Contact';
import { useHistory } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();

    const handleClick = () => {
      // Redirect to the route for displaying content
      history.push('/main');
    };
    return (
      <div className="home">
        {loggedIn ? (
          <> <Header /><TopContainer /><KeysChord />
          <Contact /><Feadback />
          
           </>
        ) : (
          <Login onLogin={setLoggedIn} />
        )}
      </div>
    );
  };
  
  ReactDOM.render(<Home />, document.getElementById('root'));
  
  export default Home;
  