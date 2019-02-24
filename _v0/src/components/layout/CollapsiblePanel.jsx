var React = require('react');

/**
 * An expandable/collapsible panel with a header.
 */
var CollapsiblePanel = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        onSelect: React.PropTypes.func,
        header: React.PropTypes.string,
        id: React.PropTypes.string,
        dataParent: React.PropTypes.string,
        defaultExpanded: React.PropTypes.bool,
        expanded: React.PropTypes.bool,
        key: React.PropTypes.any
    },
    
    getDefaultProps: function() {
        return {
            defaultExpanded: false
        };
    },

    getInitialState: function() {
        return {
            expanded: this.props.defaultExpanded
        };
    },
    
    render: function() {
        return(
            <div className={"panel panel-default "  + (this.isExpanded() ? 'expanded' : 'collapsed')}>
                {this._renderHeader()}
                {this._renderBody()}
            </div>
        );
    },
    
    /**** public ****/
    
    /**
     * @return whether the panel is expanded
     */
    isExpanded: function() {
        return this.props.expanded != null ? this.props.expanded : this.state.expanded;
    },
    
    /**
     * Toggles the expanded state of the panel.
     * @param event The event that triggered the toggle
     */
    toggleExpand: function(event) {
        this.props.onSelect && this.props.onSelect(event, this.props.id);
        this.setState({ expanded: !this.state.expanded});  
    },
    
    /**** private ****/
    _renderHeader: function() {
        return (
            <div className="panel-heading" onClick={this.toggleExpand}>
                <h4 className="panel-title">
                    <a data-toggle="collapse"
                            data-parent={'#' + (this.props.dataParent || '')}
                            href={'#' + (this.props.id || '')}
                            className={this.isExpanded() ? null : 'collapsed'}>
                            {this.props.header}
                    </a>
                </h4>
                <span className={'panel-icon glyphicon ' + (this.isExpanded() ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down')}/>
            </div>
        )
    },
    
    _renderBody: function() {
        return(
            <div id={this.props.id} className={"panel-collapse collapse " + (this.isExpanded() ? 'in' : '')} >
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = CollapsiblePanel;