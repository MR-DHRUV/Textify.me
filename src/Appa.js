import { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// props.mode ==='light' ? 'dark' :'light' (colour reverser for text)

function App() {

  const [mode, setMode] = useState('light');
  const [buttonMode, setbuttonMode] = useState('-');


  const toggleMode = () => {

    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      document.getElementById('text-area').style.backgroundColor = 'white';
      document.getElementById('text-area').style.color = 'black';
      setbuttonMode('-')

      showAlert('Light mode has been enabled');

    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      document.getElementById('text-area').style.backgroundColor = 'rgba(36, 35, 35, 0.603)';
      document.getElementById('text-area').style.color = 'white';
      setbuttonMode('-outline-')


      showAlert('Dark mode has been enabled');
    }

  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message
    }
    )

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }




  return (
    <>
      <Router>
        <div id="main"  >
          <Alert alert={alert} />
          <Navbar title="Textify.me" mode={mode} toggleMode={toggleMode} />
          <Switch>

            <Route exact path="/">
              <TextForm heading="Enter text you want to analyze" mode={mode} showAlert={showAlert} buttonMode={buttonMode} />
            </Route>

            <Route exact path="/About">
              <About />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;

// to use js in html use {} to write your js

