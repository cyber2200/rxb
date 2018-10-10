import { connect } from 'react-redux'
import SignUp from '../components/SignUp'

const mapStateToProps = state => ({
  "state" : state    
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
