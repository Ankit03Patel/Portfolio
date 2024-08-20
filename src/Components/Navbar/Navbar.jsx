import  { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu] =useState("home");
  const menuref = useRef();
  const openmenu=()=>
    {
      menuref.current.style.right="0";
    }
    const closemenu=()=>
      {
        menuref.current.style.right="-350px"
      }
  return (
    <div className='navbar'>
      <div className='name-title'>
       <h1>AnkiT</h1> 
      <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_open} onClick={openmenu} className='nav-mob-open' alt="" /> 
     
      <ul ref={menuref} className="nav-menu">
        <img src={menu_close} onClick={closemenu} className='nav-mob-close' alt="" />
        <li><AnchorLink className='anchorlink' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={nav_underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={30} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={nav_underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={30} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={nav_underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={30} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={nav_underline} alt="" />:<></>}</li>
        <li><AnchorLink className='anchorlink'offset={30} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={nav_underline} alt="" />:<></>}</li>
        </ul>  
        <div className="nav-connect"><AnchorLink className='anchorlink' href='#contact'>Connect with Me</AnchorLink></div>
    </div>
  )
}

export default Navbar