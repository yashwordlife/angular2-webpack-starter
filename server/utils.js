

var utils = function () {
    return {
        fetchJSONProperty : function (object) {
            for(property in object) {
                return JSON.parse(property);
            }
        }
    }
};

module.exports = utils;