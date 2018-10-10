import { connect } from 'react-redux'
import Login from '../components/Login'

const mapStateToProps = state => ({
  "state" : state    
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
