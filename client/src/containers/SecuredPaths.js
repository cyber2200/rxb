import { connect } from 'react-redux'
import SecuredPaths from '../components/SecuredPaths'

const mapStateToProps = state => ({
    "auth" : state.auth
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecuredPaths)
