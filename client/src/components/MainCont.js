import React, {Component} from 'react'
import {t} from '../trans/t'
import routes from '../routes'
import { Cookies } from 'react-cookie';

class MainCont extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        const cookies = new Cookies();
        var rtlClass = '';
        if (cookies.get('lang') === 'he') {
            rtlClass = 'div-rtl-cont';
        }
        
        if (this.props.state.loader.show) {
            return(
                <div className={rtlClass}>
                    <div className="loader-div">
                        {t('loading', 'en')}<br />
                        <img alt="" className="loader-img img-fluid" src="/assets/img/loading.gif" />
                    </div>
                </div>
            )   
        } else {
            return(
                <div className={rtlClass}>   
                    {routes}
                </div>
            )
        }
    }   
}

export default MainCont