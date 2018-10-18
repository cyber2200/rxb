import React from 'react'
import { Link } from 'react-router-dom'
import {t} from '../../trans/t'

const Nav = () => {
    return(
        <div>
            <div className="desktop-menu-div">
                <div className="desktop-menu-item">
                    <Link className="link-style" to="/secured">{t("home", "en")}</Link>
                </div>
                <div className="desktop-menu-item">
                    <Link className="link-style" to="/secured/page2secured">{t("page2secured", "en")}</Link>
                </div>
                <div className="desktop-menu-item">
                    <Link className="link-style" to="/secured/logout">{t("logout", "en")}</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav