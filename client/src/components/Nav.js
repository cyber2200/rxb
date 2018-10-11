import React from 'react'
import { Link } from 'react-router-dom'
import {t} from '../trans/t'

const Nav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Boilerplate</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle clickable"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {t('language')}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/langs/he" className="dropdown-item">{t('hebrew')}</Link>
                                <Link to="/langs/en" className="dropdown-item">{t('english')}</Link>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">{t("signup")}</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/secured">{t("login")}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav