import { connect } from 'react-redux'
import MainCont from '../components/MainCont'

const mapStateToProps = state => (
    {"state" : state}
)

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCont)
