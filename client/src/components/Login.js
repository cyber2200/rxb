import React, {Component} from 'react'
import {updateEmailInput, updatePasswordInput, sendForm} from '../actions/login'
import {Redirect, Link} from 'react-router-dom'
import {t} from '../trans/t'

class Login extends Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
  } 
  
  formHandler(e) {
    this.props.dispatch(sendForm(this.props.state.login));
    e.preventDefault();
  }
  
  emailChanged(e) {
    this.props.dispatch(updateEmailInput(e.target.value));
  }
  
  passwordChanged(e) {
    this.props.dispatch(updatePasswordInput(e.target.value));
  }
  
  render() {
    var statusDisplay = '';
    if (this.props.state.login.formStatus.status === 'PROCESSING') {
        statusDisplay = t('processing')
    }
    
    if (this.props.state.login.formStatus.status === 'OK' && this.props.state.auth.sessionId !== '') {
        return (
            <Redirect to='/secured' />
        )
    } else {
        return(
          <div className="main-cont">
            <div className="col-md-4 margin-center text-center">
              <div>
                <Link to="/signup">{t('signup')}</Link>
              </div>
              <form onSubmit={this.formHandler}>
                {t('email')}:<br />
                <input type="text" className="form-control" onChange={this.emailChanged} value={this.props.state.login.email} /><br />
                {t('password')}:<br />
                <input type="password" className="form-control" onChange={this.passwordChanged} value={this.props.state.login.password} /><br />
                <div>{statusDisplay}</div>
                <div>
                    {this.props.state.login.formStatus.errs.map((v, i) => {
                        return (
                            <div key={i}>
                                {t(v.msg)}
                            </div>
                        )
                    })}
                </div>
                <input type="submit" className="btn" value={t('login_submit')} />
              </form>
            </div>
          </div>  
        )   
    }
  }
}

export default Login
