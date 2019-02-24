var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Toolbar with action elements at the top of the preview panel.
 */
var Toolbar = React.createClass({
    /**** inherited ****/
    
    render: function() {
        return(
            <div className={this.props.className + " btn-toolbar"} role="toolbar">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" onClick={this._onPrint}>Print</button>
                </div>
            </div>
        )
    },
    
    /**** private ****/
    
    /**
     * Invokes the browser's print command.
     */
    _onPrint: function() {
        // just invoke the browser's print command
        window.print();
    }
});

module.exports = Toolbar;