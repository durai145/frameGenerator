define(function (require, exports, module) {
    var FieldMapper = require("Mapper");
    exports.CreateField = function (frameObj) {
        console.log(FieldMapper.mapper[frameObj.HtmlType]);
        return FieldMapper.mapper[frameObj.HtmlType].createField(frameObj);
    }
});