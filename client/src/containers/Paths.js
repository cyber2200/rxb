import { connect } from 'react-redux'
import Paths from '../components/Paths'

const mapStateToProps = state => ({
    "auth" : state.auth
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paths)
