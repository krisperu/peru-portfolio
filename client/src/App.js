import { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import HomePageEn from './components/HomePageEn'
import HomePageRu from './components/HomePageRu'

function App() {
  const [english, setEnglish] = useState(true)

  function toggleLang() {
    setEnglish(english => !english)
  }

  return (
    <div className="App">
      <div>
        {english

        ?

        <div>
          <NavLink
          to="/ru"
          onClick={toggleLang}
          exact
          className="item"
          activeStyle={{
            background: "#EDEADE",
          }}
          >
          <div className="language">РУ</div>
          </NavLink> 
          <HomePageEn />
        </div>

        :

        <div>
        <NavLink
        to="/"
        onClick={toggleLang}
        exact
        className="item"
        activeStyle={{
          background: "#EDEADE",
        }}
        >
        <div className="language">US</div>
        </NavLink> 
        <HomePageRu />
        </div>

        }
      </div>
      
    </div>
  );
}

export default App;
