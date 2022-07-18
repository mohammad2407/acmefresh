import React from 'react'
import {Routes,Route} from 'react-router'
import { Checkout } from '../components/checkout/Checkout'
import Home from '../components/Home/Home'
import { Farmsetup } from '../components/kits/Farmsetup'
import Homesetup from '../components/kits/Homesetup'
import { Hydroponic } from '../components/kits/Hydroponic'
import { SingleHydroComponent } from '../components/kits/SingleHydroComponent'
import { Navbar } from '../components/Navigation/Navbar'
import { Store } from '../components/store/Store'
export const Routers = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            
            <Route path='/' element = {<Home />} />
            <Route path='/store' element = {<Store />} />
            <Route path='/setups' element = {<Hydroponic />} />
            <Route path='/checkout' element = {<Checkout />} />
            <Route path='/hydroponics' element = {<Hydroponic />} />
            <Route path='/setup-kit/Farm-setup' element = {<Farmsetup />} />
            <Route path='/setup-kit/Home-setup' element = {<Homesetup />}/>
            <Route path = '/setup-kit/Farm-setup/:id' element = {<SingleHydroComponent />} />
        </Routes>
    </div>
  )
}
