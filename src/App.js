import React from 'react';
import '../src/components/ProductUI/App.css';
import Navbars from '../src/components/navbar/Navbars'

// import Footer from './components/ProductUI/Footer';
import Home from '../src/components/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
<Router>
  <Navbars/> 
    <div className="pages">
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
</div>
</Router>
{/* <Footer/> */}
    </>
  )
}

export default App;
