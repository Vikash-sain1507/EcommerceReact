import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const navigations =[
  {
    name: 'Home',
    path: '/'
  },
  {
    name:'Products',
    path: '/products'
  },
  {
    name:'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]



function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("vikashDetails");
    navigate('/login')
  }
    return (
        <div className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col  md:flex-row items-center">
          <Link to={'/'} className="flex  cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white  p-1 bg-pink-500 rounded-full py-1" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-5xl ">Ecommerce</span>
          </Link>
          <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center">
            {
              navigations.map((navigation)=>{
                return(
                  <Link to={navigation.path} className='mr-8 hover:text-pink-400 text-3xl '>{navigation.name}</Link>
                )
              })
            }

          </nav>
          <button onClick={handleLogout} className="inline-flex items-center mr-3 bg-pink-400 border-0 py-3 px-4 focus:outline-none hover:bg-gray-400 rounded text-base  mt-4 md:mt-0">LOG OUT
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <Link to={'/cart'} className="inline-flex items-center bg-pink-400 border-0 py-3 px-4 focus:outline-none hover:bg-gray-400 rounded text-base  mt-4 md:mt-0">Go to Cart
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
 

 
          
          
          
          
        </div>
      </div>
    )
}

export default Header