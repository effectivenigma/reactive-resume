var React = require('react');

/**
 * An input field with a label on the left.
 */
var LabeledInput = React.createClass({
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
           <div className={props.className + ' input-group'}>
                <span className={'input-group-addon'}>
                    {props.label}
                </span>
                <input type='text' 
                        className='form-control' 
                        placeholder={props.placeholder}
                        value={props.value}
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

module.exports = LabeledInput;