var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('../layout/Panel');
var CollapsiblePanel = require('../layout/CollapsiblePanel');
var Accordion = require('../layout/Accordion');

var Header = require('./sections/Header');
var Summary = require('./sections/Summary');
var Experience = require('./sections/Experience');
var Education = require('./sections/Education');

/**
 * A panel containing an accordion with various sections of the app.
 * Each accordion panel has input fields of its own for the user to fill out.
 */
var InputPanel = React.createClass({
    /**** inherited ****/
    
    propTypes: {
      sections: React.PropTypes.object,
      _data: React.PropTypes.object,
      onContentChanged: React.PropTypes.func  
    },
    
    getDefaultProps: function() {
      return {
          sections: {},
          onContentChanged: null
      };
    },
    
    getInitialState: function() {
        return {
          _data: this.props.data || {} 
        };
    },
    
    render: function() {
        return(
           <Panel {...this.props}>
               <div className="panel-header">
                    <div className="inline glyphicon glyphicon-edit"/>
                    <h6 className="inline">Edit Content</h6>
               </div>
               <Accordion>
                   {
                       Object.keys(this.props.sections).map(function (key, index) {
                            var props = {
                                'id': ('collapsible-' + index),
                                'key': key,
                                'header': this.props.sections[key]
                            }
                            return <CollapsiblePanel {...props}>{this._renderSection(key, index, props)}</CollapsiblePanel>
                        }, this)
                   }
            </Accordion>
        </Panel>
        );
    },
    
    /* private */
    _renderSection: function(key, index, parentProps) {
        var props = {
            'id': parentProps['id'] + '-input-' + index,
            'key': parentProps['key'] + '-input-' + index,
            'sectionId': key,
            'onDataChanged': this._handleDataChanged
        };
        switch(key) {
            case "Header":
                return React.createElement(Header, props);
            case "Summary":
                return React.createElement(Summary, props);
            case "Experience":
                return React.createElement(Experience, props);                
            case "Education":
                return React.createElement(Education, props);                
            default:
                return <div />
        }
    },
    
    /**** private ****/
    _handleDataChanged: function(sectionId, data) {
        var content = this.state._data;
        content[sectionId] = data;
        this.setState({_data: content});
        
        if (this.props.onContentChanged) {
            this.props.onContentChanged("sections", this.state._data)
        }
    }
});

module.exports = InputPanel;