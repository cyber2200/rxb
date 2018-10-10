import { connect } from 'react-redux'
import NoMatch from '../components/NoMatch'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoMatch)
