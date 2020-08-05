import React from 'react'
import logo from '../assets/mutify-logo.png'

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/"><img src={logo} alt="logo" className='mr-4' />MUTIFY</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Works With </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Noise Level</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Switch Device </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">feedback</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
