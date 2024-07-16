import logo from './logo.svg';
import './App.css';
import './index.css';


import { BrowserRouter as Router, Switch, Route ,Routes} from 'react-router-dom';
import Footer from './customer/components/footer/Footer';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/*' element={<CustomerRoutes />}></Route>
      <Route path='/admin/*' element={<AdminRoutes />}></Route>

    </Routes>
    </div>


  );
}

export default App;
