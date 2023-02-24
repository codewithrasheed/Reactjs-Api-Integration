import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../screen/product';

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Router;
