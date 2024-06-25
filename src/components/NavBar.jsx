import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const NavBar = () => {
const[nav, setNav] = useState(true);

const handleSetActive = (to) => {
  console.log(to);
};

const scrollToTop = () => {
  scroll.scrollToTop();
};

const handleNav = () => {
  setNav(!nav)
};


  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
            <li className="p-4"><Link activeClass="active" to="Analytics" spy={true} smooth={true} offset={-50} duration={500} onSetActive={handleSetActive}>Analytics</Link></li>
            <li className="p-4"><Link activeClass="active" to="Newsletter" spy={true} smooth={true} offset={-250} duration={500} onSetActive={handleSetActive}>Newsletter</Link></li>
            <li className="p-4"><Link activeClass="active" to="Services" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>Services</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 duration-500 ease-in-out md:left-[-100%]' : 'fixed left-[-100%] top-0 w-[60%] h-full bg-[#000300] border-r border-gray-900 duration-500 ease-in-out'}> 
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
          <ul className="p-4">
              <li className="p-4 border-b border-gray-600"><Link activeClass="active" to="Analytics" spy={true} smooth={true} offset={-50} duration={500} onSetActive={handleSetActive}>Analytics</Link></li>
              <li className="p-4 border-b border-gray-600"><Link activeClass="active" to="Newsletter" spy={true} smooth={true} offset={-100} duration={500} onSetActive={handleSetActive}>Newsletter</Link></li>
              <li className="p-4 border-b border-gray-600"><Link activeClass="active" to="Services" spy={true} smooth={true} offset={-150} duration={500} onSetActive={handleSetActive}>Services</Link></li>
              <li className="p-4 border-b border-gray-600"><a onClick={scrollToTop}>Back To Top</a></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar