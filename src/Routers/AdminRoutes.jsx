import { Routes, Route } from 'react-router-dom';
import Admin from '../Admin/components/Admin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../State/Auth/Action';
import Home from '../customer/pages/Home';


export default function AdminRoutes() {
  const dispatch = useDispatch()
const {auth} = useSelector(store=>store)
const jwt = localStorage.getItem('jwt')


useEffect(() => {
  if(jwt){
    dispatch(getUser(jwt))
       }

}, []);

console.log(auth?.user_data?.role)


  return (
    <div>
      <Routes>
        {auth?.user_data?.role === "ADMIN" ? <Route path="/*" element={<Admin />} /> :<Route path="/*" element={<Home />} />}
        
      </Routes>
    </div>
  );
}

