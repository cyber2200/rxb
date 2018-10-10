import React, {Component} from 'react';
import { Cookies } from 'react-cookie';
import {t} from '../trans/t'
import {setLang} from '../actions/lang'

class LangSwitcher extends Component {
    
    componentDidMount() {
        this.updateLang();
    }
    
    componentDidUpdate() {
        this.updateLang();
    }
    
    updateLang() {
        const cookies = new Cookies()
        const langsArr = ["en", "he"]
        
        var tArr = this.props.location.pathname.split("/")
        
        var lang = tArr[2]
        if (langsArr.indexOf(lang) === -1) {
           lang = 'en' 
        }
        
        if (lang !== cookies.get('lang')) {
            cookies.set('lang', lang, {path: '/'});
            this.props.dispatch(setLang(lang));   
        }
    }
    
    render() {
        if (this.props.state.processing) {
            return (
                <div className="main-cont text-center">
                    {t('loading')}
                </div>
            )            
        } else {
            return (
                <div className="main-cont text-center">
                    {t('lang_switched')}
                </div>
            )               
        }
     
    }
}

export default LangSwitcher;