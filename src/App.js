
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] =useState("light"); // Whether the dark mode is enabled or not
  const [alert, setAlert] =useState(null);

  const showAlert=(massage, type)=>{
      setAlert({
        msg: massage,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert(" Dark mode has been enabled", "success");
      document.title="TextUtils- DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert(" Light mode has been enabled", "success");
      document.title="TextUtils- LightMode";
    }
  }
  return (
    <>
    <Router>
     {/* <Navbar title="Textutils" about="AboutUtils"/> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className='container my-3'>
        <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              </Route>
        </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
