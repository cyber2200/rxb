import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
