import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        {/* This Outlet is where index.jsx or other pages will appear */}
        <Outlet />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
 
export default App;