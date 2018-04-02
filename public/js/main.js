/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    /* baseUrl: "js/lib", */
    paths: {
        'jquery': './lib/jquery',
        'require': './lib/require',
        'FrameGenerator': './lib/external/FrameGenerator/index',
        'Mapper': "./lib/external/FrameGenerator/mapper/index",
        'HtmlText': "./lib/external/FrameGenerator/mapper/map/HtmlText",
        'HtmlSelect': "./lib/external/FrameGenerator/mapper/map/HtmlSelect",

        /* , 'toaster'       : './lib/external/angular/toaster'*/
        /*, 'toasterService': './lib/angular/services/toasterService'*/
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        "FrameGenerator": ["jquery", "require"]
    }
    /*
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
    */
});

requirejs([
    'require',
    'jquery',
    "FrameGenerator"
], function (require, angular, FrameGenerator) {
    'use strict';

    /*
      * place operations that need to initialize prior to app start here
      * using the `run` function on the top-level module
      */
    //  console.log('ufi');
    //  console.log(ufi);
    //require(['domReady!'], function (document) {
    /*angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
    */
    //});
    var frameObj = {
        "group": "USS",
        "name": "registerUserRequest",
        "label": "Basic Details",
        "task": "ES",
        "desc": "",
        "HtmlType": "LIST",
        "htmlType": "LIST",
        "entitle": "NONREADONLY",
        "enttlname": 255,
        "mndf": "N",
        "dataType": "LIST",
        "cclass": "ctable",
        "parent": "",
        "parentHtmlType": "",
        "validate": "",
        "dflt": "",
        "min": "0",
        "max": "60",
        "tips": "",
        "onkeyup": "onKeyUp(this);",
        "onchange": "onChange(this);",
        "onkeydown": "onKeyDown(this);",
        "onkeypress": "onKeyPress(this);",
        "onclick": "onClick(this);",
        "onblure": "onBlure(this);",
        "listVal": "0",
        "help": "N",
        "helpLink": "helpload",
        "xml": "Y",
        "xmlname": "",
        "Xpath": "/",
        "maxCol": "1",
        "col": "0",
        "dimensions": "",
        "dimensionMax": "",
        "dimensionMin": "",
        "dataCategory": "primary",
        "camelCase": 0,
        "childs": []
    };

    document.getElementById("demo").appendChild(FrameGenerator.CreateField(frameObj));

});