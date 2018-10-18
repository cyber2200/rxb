import { connect } from 'react-redux'
import PathRoutes from '../components/PathRoutes'

const mapStateToProps = state => (
    {"state" : state}
)

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PathRoutes)
