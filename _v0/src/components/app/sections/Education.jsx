var React = require('react');
var EducationItem = require('./EducationItem');

var Education = React.createClass({
    /**** inherited ****/
    
    propTypes: {
        _data: React.PropTypes.object,
        itemCount: React.PropTypes.number,
        onDataChanged: React.PropTypes.func,
        sectionId: React.PropTypes.string
    },
    
    getDefaultProps: function() {
        return {
            itemCount: 0,
            sectionId: "Education",
            onDataChanged: null
        }
    },
    
    getInitialState: function() {
      return {
          itemCount: this.props.itemCount,
          _data: {}
      }  
    },
    
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.itemCount; i++) {
            items.push(i);
        }
        
        return(
            <div className='education'>
                {
                    items.map(function(key) {
                        return <EducationItem key={key} id={'education-item-'+key} itemId={key} onDataChanged={this._onDataChanged}/>
                    }, this)
                }
                <button type="button" className="btn btn-default btn-sm" onClick={this._addItem}>Add Education Item</button>                
            </div>
        );
    },
    
    /**** private ****/
    
    /**
     * Adds a new empty education item, as a result of the state count change made here.
     */
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

module.exports = Education;