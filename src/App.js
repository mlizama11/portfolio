import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

// Layout
import Layout from './layout/Layout';

// pages
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router basename="/portfolio">
      <Layout>
        <Switch>
          <Route path='/' component={About} exact />
          <Route path='/about' component={About} />
          <Route path='/education' component={Education} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Redirect path='/portfolio' />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
