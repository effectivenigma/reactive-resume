/**
 * Utility module to test and validate data.
 */
var Validation = {
    
    /**
     * Recursively tests if the given item has any value.
     * An object has value when it is non-empty and at least one of its keys has a value.
     * An string has value when it is non-empty.
     * @param item {any} Thing to test
     * @return {boolean} Whether item has value
     */
    hasValue: function(item) {
        var hasValue = false;
        
        if(typeof(item) === "object") {
            hasValue = item.length && item.length > 0;
            
            Object.keys(item).map(function(key) {
                if (!hasValue) {
                    hasValue = this.hasValue(item[key]);
                }
            }, this);
        } else {
            hasValue = !!item && ((typeof(val) !== "string") || (val.length > 0));  
        }
        
        return hasValue;
    }
}

module.exports = Validation;