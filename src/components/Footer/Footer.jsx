
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className="bg-gray-800 text-white flex justify-around mx-auto items-center p-8 overflow-hidden w-full">
      <div className="left w-1/2">
        <img className='md:w-[400px] md:h-[160px] w-[300px] ' src="https://images.unsplash.com/photo-1725113114015-7d65ebd4f2bb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="right flex justify-center items-center md:w-1/2 ">
      <ul className='flex md:flex-row gap-8 md:gap-20'>
  <li>
    <NavLink to="https://www.facebook.com/Araf1314" target='_blank' className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 text-3xl md:text-4xl
      ${isActive ? "text-orange-700" : "text-white"}
      border-b border-gray-100 lg:border-0
      hover:text-orange-700 lg:p-0`
    }>
      <FontAwesomeIcon icon={faFacebook} />
    </NavLink>
  </li>
  <li>
    <NavLink to="https://www.facebook.com/Araf1314" target='_blank' className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 text-3xl md:text-4xl
      ${isActive ? "text-orange-700" : "text-white"}
      border-b border-gray-100 lg:border-0
      hover:text-orange-700 lg:p-0`
    }>
      <FontAwesomeIcon icon={faGithub} />
    </NavLink>
  </li>
  <li>
    <NavLink to="https://www.facebook.com/Araf1314" target='_blank' className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 text-3xl md:text-4xl
      ${isActive ? "text-orange-700" : "text-white"}
      border-b border-gray-100 lg:border-0
      hover:text-orange-700 lg:p-0`
    }>
      <FontAwesomeIcon icon={faLinkedin} />
    </NavLink>
  </li>
  <li>
    <NavLink to="https://www.facebook.com/Araf1314" target='_blank' className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 text-3xl md:text-4xl
      ${isActive ? "text-orange-700" : "text-white"}
      border-b border-gray-100 lg:border-0
      hover:text-orange-700 lg:p-0`
    }>
      <FontAwesomeIcon icon={faInstagram} />
    </NavLink>
  </li>
</ul>

      </div>

    </div>
  )
}
