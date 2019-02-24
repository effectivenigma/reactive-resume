var React = require('react');
var Formatter = require('../../src/utils/formatter');
var Validation = require('../../src/utils/validation');

var Columnd = React.createClass({
    /**** inherited ****/
    
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
            <div className="columnd">
                {this._renderHeader()}
                {this._renderSummary()}
                {this._renderExperience()}
                {this._renderProject()}
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
    
    _userShortDate: function() {
        return true;
    },
    
    /* internal renderers */
    
    _renderHeader: function() {
        var sectionId = "Header";
        var items = this._getSectionItems(sectionId);
        
        if (Validation.hasValue(items)) {
            var nameKey = "Name";
            return(
                <div className="header row">
                    <h1 className="highlight col-xs-8 nopadding">
                        {Validation.hasValue(items[nameKey]) ? items[nameKey] : ""}
                    </h1>
                    <div className="contact-card col-xs-4">
                    {
                        Object.keys(items).map(function(key, index) {
                            if(key !== nameKey && Validation.hasValue(items[key])) {
                                return <div className="contact" key={index}>{items[key]}</div> 
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
        var summary = this._getSectionItems(sectionId); // array of objects
        var skills = this._getSectionItems("Skills");
        var title = this._getSectionTitle(sectionId);
        
        if (Validation.hasValue(summary)) {
            return(
                <section className="skills-summary">
                    {this._renderSectionHeader(title)}
                    <div className="row content">
                    <ul className="summary col-xs-7">
                    {
                        Object.keys(summary).map(function(key, index) {
                            return <li key={key}>{summary[key]['desc']}</li>
                        }, this)
                    }
                    </ul>
                    <div className="skills col-xs-5">
                    {
                        Object.keys(skills).map(function(key, index){
                            var keywords = skills[key].join(", ");
                            return (
                                <div className="skill-item" key={key}>
                                    <div className="skill-group inline">{key + ": "}</div>
                                    <div className="keywords inline">{keywords}</div>
                                </div>
                            )
                        }, this)
                    }
                    </div>
                    </div>
                </section>
            );
        }
    },
    
    _renderExperience: function() {
        var sectionId = "Experience";
        var items = this._getSectionItems(sectionId);
        var title = this._getSectionTitle(sectionId);
        
        if (Validation.hasValue(items)) {
            return(
                <section className="experience">
                    {this._renderSectionHeader(title)}
                    <div className="row content">
                    {
                        Object.keys(items).map(function(key, idx) {
                            return this._renderExperienceItem(items[key], idx);
                        }, this)
                    }
                    </div>
                </section>
            );
        }
    },
    
    _renderExperienceItem: function(item, key, highlightKey = 'company', subHighlightKey = 'position') {
        var summary = typeof(item['desc']) === "string" ? Formatter.strArray(item['desc']) : item['desc']||'';
        var company = item[highlightKey] ? item[highlightKey] : '';
        var location = item['location'] ? item['location'] : '';
        var title = item[subHighlightKey] ? item[subHighlightKey] : '';
        var duration = Formatter.strDateRange(this._userShortDate(), item['startDate'], item['endDate']);
        
        return(
            <div className="experience-item row" key={key}>
                <div className="col-xs-3 left-col">
                    {this._renderRowHighlight(company, "company")}
                    {this._renderPlainDiv(location, "location")}
                    {this._renderPlainDiv(duration, "duration")}
                </div>
                <div className="col-xs-9 right-col">
                    <h5 className="position">{title}</h5>
                    <ul className="desc-list">
                {
                    Object.keys(summary).map(function(key) {
                        return <li key={key}>{summary[key]}</li>
                    }, this)
                }
                    </ul>
                </div>
            </div>
        )
    },
    
    _renderProject: function() {
        var sectionId = "Projects"; // title, start, end, desc
        var items = this._getSectionItems(sectionId); // array of objects
        var title = this._getSectionTitle(sectionId);
        
        if (Validation.hasValue(items)) {
            return(
                <section className="projects">
                    {this._renderSectionHeader(title)}
                    <div className="row content">
                    {
                        Object.keys(items).map(function(key, idx) {
                            return this._renderExperienceItem(items[key], idx, "title");
                        }, this)
                    }
                    </div>
                </section>
            );
        }
    },
    
    _renderEducation: function() {
        var sectionId = "Education";
        var items = this._getSectionItems(sectionId);
        var title = this._getSectionTitle(sectionId);
        
        if (Validation.hasValue(items)) {
            return(
                <section className="education">
                    {this._renderSectionHeader(title)}
                    <div className="row content">
                    {
                        Object.keys(items).map(function(key, idx) {
                            return this._renderExperienceItem(items[key], idx, "school", "degree");
                        }, this)
                    }
                    </div>
                </section>
            );
        }
    },
    
    _renderSectionHeader: function(title) {
        return (
            <div className="row section-header">
                <h3 className="col-xs-3">{title}</h3>
                <div className="horiz-line col-xs-9"/>
            </div>
        )
    }, 
    
    _renderRowHighlight: function(value, classes) {
        if (Validation.hasValue(value)) {
            return <h4 className={classes + " highlight"}>{value}</h4>
        }
    },
    
    _renderPlainDiv: function(value, classes) {
        if(Validation.hasValue(value)) {
            return <div className={classes}>{value}</div>
        }
    }
});

module.exports = Columnd;