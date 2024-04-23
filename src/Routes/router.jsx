import { createHashRouter } from 'react-router-dom'
import { Root } from './Root'
import Startpage from '../Components/Startpage'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Cart from '../Components/Cart'
import Admin from '../Components/Admin'

const Router = createHashRouter([
	  {
	    path: '/',
	    element: <Root />,

		children: [
			{
				path: '/',
				element: <Startpage/>
			},
			{
				path: '/about',
				element: <About/>
			},
			{
				path: '/contact',
				element: <Contact/>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/admin',
				element: <Admin/>
			}

]
	}
])

export  { Router }