import { connect } from 'react-redux'
import FileUpload from '../components/FileUpload'

const mapStateToProps = state => ({
  state : {
    "fileUploader" : state.fileUploader
  }
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload)
