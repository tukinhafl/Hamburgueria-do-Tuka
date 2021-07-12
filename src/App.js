import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FastFood } from './pages/Products'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={FastFood} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
