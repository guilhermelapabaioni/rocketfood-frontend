import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home'
import {Menu} from '../pages/Menu'
import {Details} from '../pages/admin/Details'
import {Edit} from '../pages/admin/Edit'
import {New} from '../pages/admin/New'

export function AdminRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/admin/details/:id" element={<Details/>}/>
      <Route path="/admin/details/edit/:id" element={<Edit/>}/>
      <Route path="/admin/new" element={<New/>}/>
    </Routes>
  )
}