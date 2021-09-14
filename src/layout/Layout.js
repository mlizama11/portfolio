// router
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <Router>
      <header className="Header">
        <Navigation />
      </header>
      <main className="Main">
        {children}
      </main>
      <Footer />
    </Router>
  )
}

export default Layout