
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const element = <FontAwesomeIcon icon={faCoffee} />
function Header() {
  return (
    <>
    <div className="container mx-auto flex md:justify-between flex-col md:flex-row gap-5 justify-center items-center p-3 py-4 bg-gray-800 text-white">
        <div className="logo pl-8">
<h1 className='text-white-700 text-4xl'>{element}</h1>
        </div>
        <div className="search md::w-1/3 ">
            <form action="" className='w-full flex bg-white rounded-md justify-center items-center'>
            <input className='w-full p-2 border-none outline-none rounded-md text-gray-800 text-xl' type="text" required placeholder="Search.." />
            <input className='text-white cursor-pointer font-bold bg-green-800 px-2 rounded-r-md py-3 ' type="submit" value={"Search"} />

            </form>

        </div>
        <div className="menu md:pr-8">
            <ul className='flex flex-col sm:flex-row gap-8 text-xl'>
                <li>
                <NavLink
  to="/"
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200
    ${isActive ? "text-orange-700" : "text-white"}
    border-b border-gray-100
    lg:border-0
    hover:text-orange-700 lg:p-0`
  }
>
  Home
</NavLink>

                </li>
                <li>
                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                </li>
                <li>
                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                </li>
                <li>
                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100   lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                </li>
            </ul>

        </div>
    </div>
    </>
  )
}

export default Header