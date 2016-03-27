var React = require('react');

/**
 * A simple panel with a border.
 */
var Panel = React.createClass({
    /**** inherited ****/
    
    render: function() {        
        return(
            <div className={this.props.className + " panel panel-default"}>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
    
});

module.exports = Panel;