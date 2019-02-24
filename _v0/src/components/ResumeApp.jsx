var React = require('react');
var InputPanel = require('./app/InputPanel');
var PreviewPanel = require('./app/PreviewPanel');

// valid, currently available sections of the resume
var SectionsJSON = require('../data/sections.json');

// test data
var JUtil = require('../utils/json');
var testdata = require('../../test/sneha'); // TODO only load based on flag

/**
 * A webpage that takes user input for resume content and gives a live preview of
 * what the final stylized version will look like for the chosen theme.
 * Note that the updates on the preview panel are done on blur for performance
 * considerations. If we update the preview on every value change event, then we'll be
 * redrawing A LOT, and mostly unnecessarily, since humans make plenty typing errors.
 */
var ResumeApp = React.createClass({
    /**** inherited ****/
    
    propTypes: {
      _data: React.PropTypes.object,
      sections: React.PropTypes.object  
    },
    
    getDefaultProps: function() {
        return {
            sections: SectionsJSON["sections"]
        }
    },
    
    getInitialState: function() {
      return {
          _data: testdata || {}
      }  
    },
    
    render: function() {
        return(
            <div className="builder container-fluid">
                <div className="row">
                    {/*<InputPanel className="col-md-6 hidden-print input-panel" sections={this.props.sections} onContentChanged={this._onSectionsDataChanged}/>*/}
                    <PreviewPanel className="preview-panel" sections={this.props.sections} data={this.state._data}/>
                </div>
            </div>
        );
    },
    
    /**** private ****/
    
    _onSectionsDataChanged: function(sectionsId, value) {
        var content = this.state._data;
        content[sectionsId] = value;
        this.setState({_data: content});
    }
});

module.exports = ResumeApp;