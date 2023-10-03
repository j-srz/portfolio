import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className='container footer'>
        
        {/* <ul>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                    Git
                </a>
            </li>
        </ul> */}
        
        <div>
            <p>Made with ❤️ by Jesús</p>
            <p>Last update - October 2, 2023</p>
        </div>
    </footer>
  )
}
