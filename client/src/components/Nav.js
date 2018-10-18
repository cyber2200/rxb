import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {t} from '../trans/t'
import {updateShowLangPopup} from '../actions/menu/menu'

class Nav extends Component {
    
    constructor(props) {
        super()
        this.showLangSelect = this.showLangSelect.bind(this);
        this.hideLangPopup = this.hideLangPopup.bind(this);
    }
    
    showLangSelect() {
        if (this.props.menuState.showLangPopup) {
            this.props.dispatch(updateShowLangPopup(false));
        } else {
            this.props.dispatch(updateShowLangPopup(true));
        }
    }
    
    hideLangPopup() {
        this.props.dispatch(updateShowLangPopup(false));
    }
    
    render() {
        return(
            <div>
                <div className="desktop-menu-div">
                    <div className="desktop-menu-item dropdown">
                        <a className="link-style" onClick={this.showLangSelect}>{t('language')}</a>
                        {this.props.menuState.showLangPopup &&
                        <div id="myDropdown" className="dropdown-content">
                            <div className="dropdown-inner">
                                <div>
                                    <Link onClick={this.hideLangPopup} to="/langs/he">{t('hebrew')}</Link>
                                </div>
                                <div>
                                    <Link onClick={this.hideLangPopup} to="/langs/en">{t('english')}</Link>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className="desktop-menu-item">
                        <Link className="link-style" to="/signup">{t("signup")}</Link>
                    </div>
                    <div className="desktop-menu-item">
                        <Link className="link-style" to="/secured">{t("login")}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav