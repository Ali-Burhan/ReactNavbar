
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-spinners-css';

const Navbar = () => {
    
  const [isloading , setisloading] = useState(true);
    const [toggle, settoggle] = useState(true)
    useEffect(() => {
        // Fetch your data here
        // And when data is loaded set the loading state to false
        setisloading(false);
    }, []);
    return (
        <>
     {isloading && <Spinner color="#3f51b5" size={60} />}
     {
    !isloading &&(
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
               <Link to='/'>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
<svg xmlns="http://www.w3.org/2000/svg" className="fill-current h-8 w-8 mr-3" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
</svg>
                <span className="font-semibold text-xl tracking-tight cursor-pointer">BurhanSE</span>
            </div>
                </Link>
            <div className="block lg:hidden">
                <button onClick={() => { settoggle(!toggle) }} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            {toggle && <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/Todo" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Todo List
                    </Link>
                    <Link to="/BudgetTracker" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Budget Tracker
                    </Link>
                    <Link to="/Weather" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Weather
                    </Link>
                    <Link to="/About" className="block ml-3 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        About
                    </Link>
                    <Link to="/Contact" className="block mx-3 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Contact
                    </Link>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div>
            </div>
            }
        </nav>
    )}
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
        </>
    )
}

export default Navbar;