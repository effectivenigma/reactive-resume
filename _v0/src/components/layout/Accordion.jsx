var React = require('react');

/**
 * Base functionality for an accordion container.
 * Holds multiple collapsible panels, only one of which may
 * be expanded at a time.
 */
var Accordion = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        defaultActivePanelId: React.PropTypes.any
    },
    
    getDefaultProps: function() {
      return {
          defaultActivePanelId: 0
      }  
    },

    getInitialState: function() {
      return {
          activePanelId: this.props.defaultActivePanelId
      }  
    },
    
    render: function() {
        return (
            <div className={this.props.className + " accordion panel-group"} id="accordion">
            	   {
                       this.hasChildren() ? this.props.children.map(this._renderCollapsiblePanel) 
                        : this.props.children ? this.renderCollapsiblePanel(this.props.children, 0) : ''
                   } 
            </div>
        )
    },
    
    /**** public ****/
    
    /**
     * @return whether there is as array of children inside this component.
     */
    hasChildren: function() {
        return this.props.children && this.props.children.length > 0;
    },
    
    /**** private ****/
    
    /**
     * Generates properties that are needed by the child panel and the creates the element.
     * @param panel The child (collapsible) panel
     * @param index The position of the panel within this component
     * @return Element with properties applied to it.
     */
    _renderCollapsiblePanel: function(panel, index) {
        var props =  {};
        props['id'] = panel.id ? panel.id : 'panel-'+index;
        props['key'] = panel.key ? panel.key : index;
        props['dataParent'] = 'accordion';
        props['onSelect'] = this._panelSelected;
        props['expanded'] = (props['id'] === this.state.activePanelId); //!panel.props.expanded && 
        
        return React.cloneElement(panel, props);
    },
    
    /**
     * Panel selection handler that ensures only one panel inside the Accordion is ever expanded.
     * @panelKey The child panel identifier.
     */
    _panelSelected: function(event, panelKey) {
        event.preventDefault();
        this.setState({activePanelId: 
            panelKey == this.state.activePanelId ? this.props.defaultActivePanelId : panelKey});
    }
    
});

module.exports = Accordion;