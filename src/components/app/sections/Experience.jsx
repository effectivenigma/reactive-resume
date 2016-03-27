var React = require('react');
var ExperienceItem = require('./ExperienceItem');

var Experience = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        _data: React.PropTypes.object, // stateful
        data: React.PropTypes.object, // initial
        itemCount: React.PropTypes.number,
        onDataChanged: React.PropTypes.func,
        sectionId: React.PropTypes.string
    },
    
    getDefaultProps: function() {
        return {
            itemCount: 0,
            sectionId: "Experience",
            onDataChanged: null
        }
    },
    
    getInitialState: function() {
      return {
          itemCount: this.props.itemCount,
          _data: this.props.data || {}
      }  
    },
    
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.itemCount; i++) {
            items.push(i);
        }
        
        return(
            <div className='experience'>
                {
                    items.map(function(key) {
                        return <ExperienceItem key={key} id={'experience-item-'+key} itemId={key} onDataChanged={this._onDataChanged}/>
                    }, this)
                }
                <button type="button" className="btn btn-default btn-sm" onClick={this._addItem}>Add Experience Item</button>
            </div>
        );
    },
    
    /**** private ****/
    _addItem: function() {
        this.setState({itemCount: this.state.itemCount + 1});
    },
    
    _onDataChanged: function(itemId, value) {
        var content = this.state._data;
        content[itemId] = value;
        
        this.setState({_data: content});
        
        if (this.props.onDataChanged) {
            this.props.onDataChanged(this.props.sectionId, this.state._data);
        }
    }
});

module.exports = Experience;