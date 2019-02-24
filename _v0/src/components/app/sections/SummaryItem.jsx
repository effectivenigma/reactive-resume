var React = require('react');
var LabeledInput = require('../../form/LabeledInput');

var SummaryItem = React.createClass({
    /**** inherited ****/
    propTypes: {
        _data: React.PropTypes.object, // stateful
        itemId: React.PropTypes.number,
        onDataChanged: React.PropTypes.func
    },
    
    getDefaultProps: function() {
      return {
          itemId: 0,
          onDataChanged: null
      };  
    },
    
    getInitialState: function() {
        return {
            _data: {}
        };
    },
    
    render: function() {
        return(
            <div className='form-group summary-item'>
                <LabeledInput label='Summary' placeholder='Summary Point' onBlur={this._onSummaryChanged}/>
                <LabeledInput label='Keywords' placeholder='Keywords' onBlur={this._onKeywordsChanged}/>
            </div>
        );
    },
    
    /**** private ****/
    
    /* targetted data change */
    _onKeywordsChanged: function(event, label, value) {
        this._onValueChanged('keywords', value);
        this._informParent();
    },
    
    _onSummaryChanged: function(event, label, value) {
        this._onValueChanged('desc', value);
        this._informParent();
    },
    
    /* generic data change */
    _onValueChanged: function(valueId, value) {
        var content = this.state._data;
        content[valueId] = value;
        this.setState({_data: content});
    },
    
    _informParent: function() {
        if(this.props.onDataChanged) {
            this.props.onDataChanged(this.props.itemId, this.state._data);
        }
    }
});

module.exports = SummaryItem;