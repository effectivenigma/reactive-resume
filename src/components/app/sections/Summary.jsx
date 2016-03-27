var React = require('react');
var SummaryItem = require('./SummaryItem');

var Summary = React.createClass({
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
            sectionId: "Summary",
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
            <div className='summary'>
                {
                    items.map(function(key) {
                        return <SummaryItem key={key} id={'summary-item-'+key} itemId={key} onDataChanged={this._onDataChanged}/>
                    }, this)
                }
                <button type="button" className="btn btn-default btn-sm" onClick={this._addItem}>Add Summary Item</button>
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

module.exports = Summary;