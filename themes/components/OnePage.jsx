var React = require('react');
var Formatter = require('../../src/utils/formatter');
var Validation = require('../../src/utils/validation');

/**
 * Single-page resume design.
 */
var OnePage = React.createClass({
    /* inherited */
    
    propTypes: {
       data: React.PropTypes.object,
       sections: React.PropTypes.object 
    },
    
    getDefaultProps: function() {
        return {
            data: {},
            sections: {}
        }
    },
    
    render: function() {
        //console.info("data updated", this.props.data);
        return (
            <div className="onepage container-flux">
                {this._renderHeader()}
                {this._renderSummary()}
                {this._renderExperience()}
                {this._renderEducation()}
            </div>
        )
    },
    
    /* private */
    _getSectionTitle: function(sectionId) {
       return this.props.sections && this.props.sections[sectionId]
                    ? this.props.sections[sectionId] : '';
    },
    
    _getSectionItems: function(sectionId) {
        var sections = this.props.data && this.props.data["sections"] ? this.props.data["sections"] : null;
        return sections && sections[sectionId] ? sections[sectionId] : {};
    },
    
    /* internal renderers */
    
    _renderHeader: function() {
        var items = this._getSectionItems("Header");
        
        if (Validation.hasValue(items)) {
            var name = items["Name"] ? items["Name"] : "";
            return (
                <div className="header row">
                    <h1 className="highlight col-xs-8">
                        {name}
                    </h1>
                    <div className="contact-card col-xs-4">
                    {
                        Object.keys(items).map(function(key, index){
                            if (key != "Name") {
                                return <div className="contact" key={key + '-' + index}>{items[key]}</div>;
                            }
                        }, this)
                    }
                    </div>
                </div>
            );
        }
    },
    
    _renderSummary: function() {
        var sectionId = "Summary";
        var title = this._getSectionTitle(sectionId);
        var items = this._getSectionItems(sectionId);
        
        if (Validation.hasValue(items)) {
            return (
                <section id={sectionId} className="summary row">
                    {Object.keys(items).length > 0 ? this._renderSectionHeader(title) : ''}
                    <div className="content col-xs-10">
                    <div className="entity">
                    <ul className="nomargin">
                    {
                        Object.keys(items).map(function(key, index) {
                            var value = items[key];
                            if (Validation.hasValue(value)) { 
                                return this._renderSummaryItem(sectionId, index, value);
                            }  
                        }, this)
                    }
                    </ul>
                    </div>
                    </div>
                </section>
            );
        }
    },
    
    _renderSummaryItem: function(sectionId, index, value) {
        return(
            <li key={sectionId+'-'+index}>
                <div>{value['desc'] ? value['desc'] : ''}</div>
                <div className="keywords">{value['keywords'] ? value['keywords'] : ''}</div>
            </li>
        );  
    },
    
    _renderExperience: function() {
        var sectionId = "Experience";
        var title = this._getSectionTitle(sectionId);
        var items = this._getSectionItems(sectionId);
        
        if (Validation.hasValue(items)) {
            return (
                <section id={sectionId} className="experience row">
                    {Object.keys(items).length > 0 ? this._renderSectionHeader(title) : ''}
                    <div className="content col-xs-10">
                    {
                        Object.keys(items).map(function(key, index) {
                            var value = items[key];
                            if (Validation.hasValue(value)) {
                                return this._renderExperienceItem(sectionId, index, value);
                            }
                        }, this)
                    }
                    </div>
                </section>
            );
        }
    },
    
    _renderExperienceItem: function(sectionId, index, value) {
        var summary = typeof(value['desc']) === "string" ? Formatter.strArray(value['desc']) : value['desc']||'';
        var company = value['company'] ? value['company'] : '';
        var location = value['location'] ? value['location'] : '';
        var title = value['position'] ? value['position'] : '';
        var duration = Formatter.strDateRange(true,value['startDate'], value['endDate']);

        return(
            <div  key={sectionId+'-'+index} className="entity container-flux">
                <div className="row nomargin">
                    <h3 className="company highlight inline">{company}</h3>
                    <div className="location inline">{", " + location}</div>
                </div>
                <div className="row nomargin">
                    <h4 className="position col-xs-7">{title}</h4>
                    <div className="date col-xs-4 push-right">{duration}</div>
                </div>
                <ul className="row desc-list">
                    {
                        Object.keys(summary).map(function(key) {
                            var val = summary[key];
                            if (val && val.length > 0)
                                return <li key={key}>{val}</li>
                        }, this)
                    }
                </ul>
            </div>
        );
    },
    
    _renderEducation: function() {
        var sectionId = "Education";
        var title = this._getSectionTitle(sectionId);
        var items = this._getSectionItems(sectionId);
        
        if (Validation.hasValue(items)) {
            return (
                <section id={sectionId} className="education row">
                    {Object.keys(items).length > 0 ? this._renderSectionHeader(title) : ''}
                    <div className="content col-xs-10">
                        {
                            Object.keys(items).map(function(key, index){
                                var value = items[key];
                                if (Validation.hasValue(value)) {
                                    return this._renderEducationItem(sectionId, index, value);
                                }
                            }, this)
                        }
                    </div>
                </section>
            );
        }
    },
    
    _renderEducationItem: function(sectionId, index, value) {
        var school = value['school']? value['school'] : '';
        var location = value['location'] ? value['location'] : '';
        var degree = value['degree']? value['degree'] : '';
        var duration = Formatter.strDateRange(true, value['startDate'], value['endDate']);
        var summary = typeof(value['desc']) === "string" ? Formatter.strArray(value['desc']) : value['desc']||'';

        return(
            <div  key={sectionId+'-'+index} className="entity container-flux">
                <div className="row nomargin">
                    <h3 className="company highlight inline">{school}</h3>
                    <div className="location inline">{", " + location}</div>
                </div>
                <div className="row nomargin">
                    <h4 className="degree col-xs-7">{degree}</h4>
                    <div className="date col-xs-4 push-right">{duration}</div>
                </div>
                <ul className="row desc-list">
                    <li>{summary}</li>
                </ul>
            </div>
        );
    },
    
    _renderSectionHeader: function(title) {
        if (Validation.hasValue(title)) {
            return (
                <h2 className="col-xs-2">{title}</h2>
            );
        }
    }
});

module.exports = OnePage;