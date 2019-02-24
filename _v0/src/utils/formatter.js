/**
 * Utility module for data formatting.
 */
var Formatter = {
    
    _monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    _months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
    /**
     * Formats a string into newline separated array.
     * @param str {String} The string to format into array.
     */
    strArray: function(str) {
        return str && typeof(str) === "string" && str.length > 0 ? str.split('\n') : [];
    },
    
    /**
     * Converts yy/mm formatted dates into MMM YYYY - MMM YYYY or month YYYY - month YYYY format
     * @param short {Boolean} If true, months will be formatted in MMM format; otherwise the full string will be used
     * @param start The start date
     * @param end Optional. The end date. Will default to "Present"
     * @return {String} Formatted date string
     */
    strDateRange: function(short, start, end) {
        var formatted = '';
        
        if (start) {
            var mlookup = short ? this._monthsShort : this._months;
            var d = new Date(Date.parse(start));
            formatted = mlookup[d.getMonth()] + " " + d.getFullYear().toString() + " - ";
            if(end && end !== "Present") {
                d = new Date(Date.parse(end));
                formatted += mlookup[d.getMonth()] + " " + d.getFullYear().toString();
            } else {
                formatted += "Present";
            }
        }
        return formatted;
    }
    
}

module.exports = Formatter;