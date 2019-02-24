var React = require('react');
var LabeledInput = require('../../form/LabeledInput');
var TextArea = require('../../form/TextArea');

var ExperienceItem = React.createClass({
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
            <div className='form-group experience-item'>
                <LabeledInput label='Company' placeholder='Company Name' onBlur={this._onCompanyChanged}/>
                <LabeledInput label='Location' placeholder='Company Location' onBlur={this._onLocationChanged}/>
                <LabeledInput label='Position' placeholder='Job Title' onBlur={this._onPositionChanged}/>
                <div className='container-flux'>
                    <div className='row'>
                        <div className='col-xs-6'><LabeledInput label='Start Date' placeholder='yyyy/mm'  onBlur={this._onStartChanged}/></div>
                        <div className='col-xs-6'><LabeledInput label='End Date' placeholder='yyyy/mm' onBlur={this._onEndChanged}/></div>
                    </div>
                </div>
                <TextArea label='Summary' placeholder='Responsibilities and Achievements'  onBlur={this._onSummaryChanged}/>
            </div>
        );
    },
    
    /**** private ****/
    
    /* targetted data change */
    _onCompanyChanged: function(event, label, value) {
        this._onValueChanged('company', value);
        this._informParent();
    },
    
    _onLocationChanged: function(event, label, value) {
        this._onValueChanged('location', value);
        this._informParent();
    },
    
    _onPositionChanged: function(event, label, value) {
        this._onValueChanged('position', value);
        this._informParent();
    },
    
    _onStartChanged: function(event, label, value) {
        this._onValueChanged('startDate', value);
        this._informParent();
    },
    
    _onEndChanged: function(event, label, value) {
        this._onValueChanged('endDate', value);
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

module.exports = ExperienceItem;