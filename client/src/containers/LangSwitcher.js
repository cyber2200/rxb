import { connect } from 'react-redux'
import LangSwitcher from '../components/LangSwitcher'

const mapStateToProps = state => ({
    "state" : state
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangSwitcher)
