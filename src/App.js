import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Ulkeler from './components/Ulkeler'
import Ulke from './components/Ulke'
import Header from './components/Header'
import Ara from './components/Ara'

function App() {
  return<>
    <Router>
         <Header/>
          <Route exact path="/">
             <Ara/>
            <Ulkeler/>
          </Route>
          <Route path="/ulke/:name" children={<ulke/>}></Route>
    </Router>
    </>
}

export default App;
