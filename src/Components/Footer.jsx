import { IconButton, Tooltip } from '@mui/material';
import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';


  
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
      <div className='footer'>
        <div>
        <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
        </div>
     
      <div className='social-media'>
      <a href="https://www.facebook.com/digitalhouseschool/" target="_blank"><FacebookIcon/></a>
      <a href="https://www.whatsapp.com/" target="_blank"><WhatsAppIcon/></a>
      <a href="https://twitter.com/_digitalhouse" target="_blank"><TwitterIcon/></a>
      <a href="https://www.instagram.com/_digitalhouse/" target="_blank"><InstagramIcon/></a>
      </div>
      </div>
    </footer>
    
  )
}

export default Footer
