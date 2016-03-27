var React = require('react');
var LabeledInput = require('../../form/LabeledInput');
var TextArea = require('../../form/TextArea');

var EducationItem = React.createClass({
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
            <div className='form-group education-item'>
                <LabeledInput label='School' placeholder='School Name' onBlur={this._onSchoolChanged}/>
                <LabeledInput label='Location' placeholder='School Location' onBlur={this._onLocationChanged}/>
                <LabeledInput label='Degree' placeholder='Qualification Title' onBlur={this._onDegreeChanged}/>
                <div className='container-flux'>
                    <div className='row'>
                        <div className='col-xs-6'><LabeledInput label='Start Date' placeholder='yyyy/mm' onBlur={this._onStartChanged}/></div>
                        <div className='col-xs-6'><LabeledInput label='End Date' placeholder='yyyy/mm' onBlur={this._onEndChanged}/></div>
                    </div>
                </div>
                <TextArea label='Summary' placeholder='Description' onBlur={this._onSummaryChanged}/>
            </div>
        );
    },
    
    /**** private ****/
    
    /* targetted data change */
    _onSchoolChanged: function(event, label, value) {
        this._onValueChanged('school', value);
        this._informParent();
    },
    
    _onLocationChanged: function(event, label, value) {
        this._onValueChanged('location', value);
        this._informParent();
    },
    
    _onDegreeChanged: function(event, label, value) {
        this._onValueChanged('degree', value);
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

module.exports = EducationItem;