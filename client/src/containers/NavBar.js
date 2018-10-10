import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
