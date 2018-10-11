import React, {Component} from 'react'
import {updateEmailInput, updatePasswordInput, sendForm, updateFullNameInput} from '../actions/signup'
import {auth} from '../actions/auth'
import {Redirect} from 'react-router-dom'
import {t} from '../trans/t'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.formHandler = this.formHandler.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.fullNameChanged = this.fullNameChanged.bind(this);
  } 
  
  formHandler(e) {
    this.props.dispatch(sendForm(this.props.state.signup));
    e.preventDefault();
  }
  
  emailChanged(e) {
    this.props.dispatch(updateEmailInput(e.target.value));
  }
  
  passwordChanged(e) {
    this.props.dispatch(updatePasswordInput(e.target.value));
  }
  
  fullNameChanged(e) {
    this.props.dispatch(updateFullNameInput(e.target.value));      
  }
  
  render() {
    var statusDisplay = '';
    if (this.props.state.signup.formStatus.status === 'PROCESSING') {
        statusDisplay = t('processing');
    } else if (this.props.state.signup.formStatus.status === 'OK') {
        this.props.dispatch(auth())
        return(
            <Redirect to="/secured" />
        )
    }
    
    return(
      <div className="main-cont">
        <div className="col-md-4 margin-center text-center">
          <form onSubmit={this.formHandler}>
            {t('full_name')}:<br />
            <input type="text" className="form-control" onChange={this.fullNameChanged} value={this.props.state.signup.fullName} /><br />
            {t('email')}:<br />
            <input type="text" className="form-control" onChange={this.emailChanged} value={this.props.state.signup.email} /><br />
            {t('password')}:<br />
            <input type="password" className="form-control" onChange={this.passwordChanged} value={this.props.state.signup.password} /><br />
            <div>
                {statusDisplay}
            </div>
            <div>
                {this.props.state.signup.formStatus.errs.map((v, i) => {
                    return (
                        <div key={i}>
                            {t(v.msg)}
                        </div>
                    )
                })}
            </div>
            <input type="submit" className="btn" value={t('submit_signup')} />
          </form>
        </div>
      </div>  
    )
  }
}

export default SignUp
