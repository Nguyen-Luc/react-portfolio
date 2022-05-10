import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/luc-nguyen-react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Nguyen-Luc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/LMDNguyen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  )
}

export default HeaderSocials
