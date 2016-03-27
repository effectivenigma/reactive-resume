var React = require('react');
var ReactDOM = require('react-dom');
var Panel = require('../layout/Panel');

var Toolbar = require('./preview/Toolbar');
var OnePage = require('../../../themes/components/OnePage');

/**
 * Live preview of user-entered data, as it would like with the chosen theme.
 */
var PreviewPanel = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        data: React.PropTypes.object,
        sections: React.PropTypes.object
    },
    
    getDefaultProps: function() {
      return({
         data: null,
         sections: null 
      });  
    },
    
    render: function(){
        return(
            <Panel {...this.props}>
                <div className="panel-header hidden-print">
                    <div className="inline glyphicon glyphicon-eye-open"/>
                    <h6 className="inline">
                        Preview <span className="label label-default">Theme: OnePage</span>
                    </h6>
               </div>
                <Toolbar className="hidden-print"/>
                <OnePage data={this.props.data} sections={this.props.sections}/>
            </Panel>
        )
    }
});

module.exports = PreviewPanel;