// Layout 
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header className="Header">
        <Navigation />
      </header>
      <main className="Main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;