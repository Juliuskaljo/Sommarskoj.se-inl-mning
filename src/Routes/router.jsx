import { createHashRouter } from 'react-router-dom'
import { Root } from './Root'
import Startpage from '../Components/Startpage'
import About from '../Components/About'
import Contact from '../Components/Contact'

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
	  }

]
	}
])

export  { Router }