import { connect } from 'react-redux'
import Nav from '../components/Nav'

const mapStateToProps = state => (
    {"menuState" : state.menu}
)

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)
