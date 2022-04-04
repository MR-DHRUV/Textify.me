import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




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
      setbuttonMode('-');
    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      document.getElementById('text-area').style.backgroundColor = 'rgba(36, 35, 35, 0.603)';
      document.getElementById('text-area').style.color = 'white';
      setbuttonMode('-outline-')
    }

  }

  return (
    <>    
        <div id="main"  >

          <Navbar title="Textify.me" mode={mode} toggleMode={toggleMode} />          
          <TextForm heading="Hey There!" mode={mode} buttonMode={buttonMode} />

        </div>
    </>
  );
}

export default App;


