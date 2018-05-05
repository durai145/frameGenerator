define(function (require, exports, module) {
    exports.createField = function (fieldObj) {
        this.tableBodyLabel = document.createElement("label");
        if (fieldObj.parentHtmlType == 'TABLE') {
            this.tableBodyLabel.className = 'cclabel';
        } else {
            this.tableBodyLabel.className = 'chlabel';
        }
        this.tableBodyLabel.setAttribute("for", fieldObj.name);
        this.tableBodyLabelContent = document.createTextNode(fieldObj.label);
        this.tableBodyMndf = document.createElement("span");
        this.tableBodyMndf.id = "mndf";
        this.tableBodyMndf.className = 'mandatory';
        this.tableBodyLabelContentMndf = document.createTextNode("*");
        this.tableBodyMndf.appendChild(this.tableBodyLabelContentMndf);
        this.tableBodyLabel.appendChild(this.tableBodyLabelContent);
        if (fieldObj.mndf == 'Y') {
            this.tableBodyLabel.appendChild(this.tableBodyMndf);
        }

    }
});