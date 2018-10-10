import { connect } from 'react-redux'
import Logout from '../components/Logout'

const mapStateToProps = state => ({
    "auth" : state.auth
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
