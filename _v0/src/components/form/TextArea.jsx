var React = require('react');

/**
 * An text input area with a label above.
 */
var TextArea = React.createClass({
    /**** inherited ****/
    
    propTypes: {
      label: React.PropTypes.string,
      inputValue: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      onBlur: React.PropTypes.func  
    },
    
    getDefaultProps: function() {
      return {
          onBlur: null
      }  
    },
    
    getInitialState: function() {
      return {
          label: this.props.label,
          inputValue: this.props.value,
          placeholder: this.props.placeholder,
      }  
    },

    render: function() {
        var props = this.props;
       
        return(
           <div className='form-group'>
                <label>
                    {this.props.label}
                </label>
                <textarea type='text' 
                        className='form-control' 
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={this._onInputChanged}
                        onBlur={this._onBlur}/>
           </div> 
        );
    },
    
    /**** private ****/
    
    _onInputChanged: function(event) {
        this.setState({inputValue: event.target.value});
    },
    
    _onBlur: function(event) {
        if (this.props.onBlur && typeof(this.props.onBlur) === 'function') {
            this.props.onBlur(event, this.state.label, this.state.inputValue);
        }
    }
  
});

module.exports = TextArea;