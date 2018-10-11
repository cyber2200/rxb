import React, {Component} from 'react'
import {updateEmailInput, updatePasswordInput, sendForm, updateFullNameInput} from '../actions/signup'
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
    return(
      <div className="main-cont">
        <div className="col-md-4 margin-center text-center">
          <form onSubmit={this.formHandler}>
            {t('full_name')}:<br />
            <input type="text" className="form-control" onChange={this.fullNameChanged} /><br />
            {t('email')}:<br />
            <input type="text" className="form-control" onChange={this.emailChanged} /><br />
            {t('password')}:<br />
            <input type="password" className="form-control" onChange={this.passwordChanged} /><br />
            <div>
                {this.props.state.signup.formStatus.map((v, i) => {
                    console.log(v)
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
