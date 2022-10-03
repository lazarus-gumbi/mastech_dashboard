import './App.css';
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar';
import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import About from './pages/About'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="left"><Sidebar product_name='Sky SMS'/></div>
        <div className="right">
          <div className="right-top">
            <TopBar />
          </div>
          <div className="right-bottom">
            <Routes>
              <Route path="/" element={<Analytics/>} />
              <Route path="/account_details" element={<Account subscription_cost='350.00' next_amount='50.32' next_date='25 Nov 2022'/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/dashboard" element={<Dashboard successful='1500' pending='15' error='23'/>} />
              <Route path="/analytics" element={<Analytics/>} />
              <Route path="/report" element={<Report/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
