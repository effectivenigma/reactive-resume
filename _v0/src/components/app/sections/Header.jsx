var React = require('react');
var LabeledInput = require('../../form/LabeledInput');

var Header = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        _data: React.PropTypes.object, // stateful
        data: React.PropTypes.object, // data to start with
        sectionId: React.PropTypes.string,
        onDataChanged: React.PropTypes.func
    },
    
    getDefaultProps: function() {
      return {
          sectionId: "Header",
          onDataChanged: null
      };  
    },
    
    getInitialState: function() {
        return {
            _data: this.props.data || {}
        };
    },
    
    render: function() {
        return(
            <div className="form-group">
                <LabeledInput label='Name' placeholder='Your Name' onBlur={this._handleInputBlur}/>
                <LabeledInput label='Phone' placeholder='Phone Number' onBlur={this._handleInputBlur}/>
                <LabeledInput label='Email' placeholder='Email Address' onBlur={this._handleInputBlur}/>
                <LabeledInput label='LinkedIn' placeholder='URL' onBlur={this._handleInputBlur}/>
                <LabeledInput label='GitHub' placeholder='Username' onBlur={this._handleInputBlur}/>
                <LabeledInput label='Twitter' placeholder='Username' onBlur={this._handleInputBlur}/>
            </div>
        );
    },
    
    /**** private ****/
    _handleInputBlur: function(event, id, value) {
        var content = this.state._data;
        content[id] = value;
        this.setState({_data: content});
        
        if(this.props.onDataChanged) {
            this.props.onDataChanged(this.props.sectionId, this.state._data);
        }
    }
});

module.exports = Header;