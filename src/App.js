import { Routes,Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import Login from './pages/Login'
import Account from './pages/Account'
import About from './pages/About'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import Support from './pages/Support';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='home' element={<Home/>}>
          <Route path='' element={<Account subscription_cost='350.00' next_amount='50.32' next_date='25 Nov 2022'/>}/>
          <Route path="account_details" element={<Account subscription_cost='350.00' next_amount='50.32' next_date='25 Nov 2022'/>} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard successful='1500' pending='15' error='23' />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="report" element={<Support />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
