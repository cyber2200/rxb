import React, {Component} from 'react'

class Wysiwyg extends Component {
  componentDidMount() {
    window.tinymce.init({ selector:'textarea' });
  } 
  render() {
    return(
      <div className="main-cont">
        <textarea></textarea>
      </div>  
    )
  }
}

export default Wysiwyg
