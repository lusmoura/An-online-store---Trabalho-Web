import React from 'react'
import github_icon from '../assets/github_icon.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left'>
                <p>© 2022 Brusinhas, Inc. </p>
                <p>Nenhum direito reservado</p>
            </div>
            <div className='footer-right'>
                <a href='https://github.com/lusmoura/An-online-store---Trabalho-Web' target='_blank' rel='noreferrer'>
                    <img src={github_icon} alt='github icon'/>
                </a>
            </div>
        </div>
    </div>
  )
}
