import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import {  } from '@fortawesome/free-solid-svg-icons'

  
const Footer = () => {

 const { state } = useContext(ContextGlobal)

 const handleScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
 }

  return (
  
    <footer className={state.theme}>
      <div onClick={handleScroll} className='btn-top'>
      <p>Back to top</p>
      </div>
      <div>
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
      </div>
   
    </footer>
    // <FontAwesomeIcon icon="coffee" />
  )
}

export default Footer
