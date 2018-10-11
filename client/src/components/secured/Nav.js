import React from 'react'
import { Link } from 'react-router-dom'
import {t} from '../../trans/t'

const Nav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/secured">Boilerplate</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/secured">{t("home", "en")}</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/secured/page2secured">{t("page2secured", "en")}</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/secured/logout">{t("logout", "en")}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav