import { connect } from 'react-redux'
import SecuredHome from '../components/secured/SecuredHome'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecuredHome)
