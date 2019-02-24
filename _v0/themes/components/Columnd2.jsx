var React = require('react');
var Formatter = require('../../src/utils/formatter');

var Columnd2 = React.createClass({
    /** inherited **/
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
        return (
            <div className="columnd2">
                {this._renderHeader()}
                {this._renderSummary()}
                {this._renderExperience()}
                {this._renderProject()}
                {this._renderEducation()}
            </div>
        )
    },

    /** private **/
    _renderHeader: function() {
        var sectionTitle = this.props.sections["Header"];
        var items = this.props.data["sections"]["Header"];
        return (
            <div className="header row">
                <h1 className="highlight col-xs-8 nopadding">
                    {items["Name"]}
                </h1>
                <div className="contact-card col-xs-4"> {
                    Object.keys(items).map(function(key, idx){
                        if (key !== "Name") {
                            return <div className="contact" key={idx}>{items[key]}</div>
                        }
                    }, this)
                } </div>
            </div>
        )
    },

    _renderSummary: function() {
        var sectionTitle = this.props.sections["Summary"];
        var summaryItems = this.props.data["sections"]["Summary"];
        var skillItems = this.props.data["sections"]["Skills"];
        return (
            <section className="skills-summary">
                {this._renderSectionHeader(sectionTitle)}
                <div className="row content">
                    <ul className="summary col-xs-6"> {
                        Object.keys(summaryItems).map(function(key, idx) {
                            return <li key={key}>{summaryItems[key]["desc"]}</li>
                        }, this)
                    } </ul>
                    <ul className="skills col-xs-6"> { // for styling purposes only; otherwise should be div
                        Object.keys(skillItems).map(function(key, idx) {
                            var keywords = skillItems[key].join(", ");
                            return (
                                <div className="skill-item" key={key}>
                                    <div className="skill-group inline">{key + ": "}</div>
                                    <div className="keywords inline">{keywords}</div>
                                </div>
                            )
                        }, this)
                    } </ul>
                </div>
            </section>
        )
    },

    _renderExperience: function() {
        var sectionTitle = this.props.sections["Experience"];
        var items = this.props.data["sections"]["Experience"];
        
        return (
            <section className="experience">
                {this._renderSectionHeader(sectionTitle)}
                <div className="row content"> {
                    Object.keys(items).map(function(key, idx) {
                        let item = items[key];
                        var roles = item["roles"] || [];
                        return (
                        <div className="experience-item row" key={idx}>
                            <div className="col-xs-3 left-col">
                                {this._renderRowHighlight(item["company"], "company")}
                                {this._renderPlainDiv(item["location"], "location")}
                                {this._renderPlainDiv(this._getFormattedDate(item["startDate"], item["endDate"]), "duration")}
                            </div>
                            <div className="col-xs-9 right-col"> {
                                Object.keys(roles).map(function(key) {
                                    var role = roles[key];
                                    return(
                                    <div key={key} className="role">
                                    <h5 className="position">{role["position"]}</h5>
                                    {roles.length > 1 && this._renderPlainDiv(this._getFormattedDate(role["startDate"], role["endDate"]), "duration")}
                                    <ul className="desc-list"> {
                                        Object.keys(role["desc"]).map(function(key) {
                                            var desc = role["desc"];
                                            return <li key={key}>{desc[key]}</li>
                                        }, this)
                                    } </ul>
                                    </div>
                                )}, this)
                            } </div>
                        </div>
                    )}, this)
                } </div>
            </section>
        );
    },

    _renderProject: function() {
        var sectionTitle = this.props.sections["Projects"];
        var items = this.props.data["sections"]["Projects"];
        return (
            <section className="projects">
                {this._renderSectionHeader(sectionTitle)}
                <div className="row content"> {
                    Object.keys(items).map(function(key, idx){
                        var item = items[key];
                        return (
                            <div className="experience-item row" key={key}>
                                <div className="col-xs-3 left-col">
                                    {this._renderRowHighlight(item["title"], "company")}
                                    {this._renderPlainDiv(this._getFormattedDate(item["startDate"], item["endDate"]), "duration")}
                                </div>
                                <div className="col-xs-9 right-col">
                                    <ul className="desc-list"> {
                                        Object.keys(item["desc"]).map(function(key, idx) {
                                            var desc = item["desc"];
                                            return <li key={key}>{desc[key]}</li>
                                        }, this)
                                    } </ul>
                                </div>
                            </div>
                        )
                    }, this) 
                } </div>
            </section>
        );
    },

    _renderEducation: function() {
        var sectionTitle = this.props.sections["Education"];
        var items = this.props.data["sections"]["Education"];
        return (
            <section className="education">
                {this._renderSectionHeader(sectionTitle)}
                <div className="row content"> {
                    Object.keys(items).map(function(key, idx){
                        var item = items[key];
                        return (
                            <div className="experience-item row" key={key}>
                                <div className="col-xs-3 left-col">
                                    {this._renderRowHighlight(item["school"], "company")}
                                    {this._renderPlainDiv(item["location"], "location")}
                                    {this._renderPlainDiv(this._getFormattedDate(item["startDate"], item["endDate"]), "duration")}
                                </div>
                                <div className="col-xs-9 right-col">
                                    <h5 className="position">{item["degree"]}</h5>
                                    
                                    <ul className="desc-list"> {
                                        Object.keys(item["desc"]).map(function(key, idx){
                                            var desc = item["desc"];
                                            return <li key={key}>{desc[key]}</li>
                                        }, this)
                                    } </ul>
                                </div>
                            </div>
                        )
                    }, this)
                } </div>
            </section>
        )
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
        return <h4 className={classes + " highlight"}>{value}</h4>
    },
    
    _renderPlainDiv: function(value, classes) {
        return <div className={classes}>{value}</div>
    },

    _getFormattedDate: function(start, end) {
        return Formatter.strDateRange(true, start, end);
    }
});

module.exports = Columnd2;