
require.config({

    /* baseUrl: "js/lib", */
    paths: {
        'framegenerator': './lib/external/framegenerator/index',
        'mapper': "./lib/external/framegenerator/mapper/index",
        'frame': './lib/external/framegenerator/uss/frame',
        'field': './lib/external/framegenerator/uss/field',
        //TODO: Need to import dynamic or from the
        'HtmlText': "./lib/external/framegenerator/mapper/map/HtmlText",
        'HtmlSelect': "./lib/external/framegenerator/mapper/map/HtmlSelect",
        'HtmlLabel': "./lib/external/framegenerator/mapper/map/HtmlLabel",
        'toaster': './lib/external/angularjs-toaster/toaster',
        'angular': './lib/external/angular/angular',
        'angular': './lib/external/angular/angular',
        'ufi': './lib/external/angular/ufi',
        'angularUiRouter': './lib/external/angular/angular-ui-router',
        'angularAnimate': './lib/external/angular/angular-animate',
        'angularRoute': './lib/external/angular-route/angular-route',
        'ngResource': './lib/external/angular-route/angular-route',
        'bootstrap': './lib/external/bootstrap/dist/js/bootstrap',
        'domReady': './lib/external/requirejs-domready/domReady',
        'controllers': './lib/angular/controllers/',
        'services': './lib/angular/services/',
        'directives': './lib/angular/directives/',
        'filters': './lib/angular/filters/',
        'jquery': './lib/jquery'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'toaster': ['angular'],
        'frame' : ['field'],
        "framegenerator": ['toaster', 'frame']
    }
    /*
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
    */
});

requirejs([
    "framegenerator",
    "frame"
], function (framegenerator, frame) {
    'use strict';
    //toaster.pop('success','this', "test");
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

    //TODO:  Object should be create from Frame Object
    var frameObj = new frame.Frame();
    console.log(frameObj);
    /* frameObj = {
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
     "listVal": "||test|VALUE",
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
*/
    document.getElementById("demo").appendChild(framegenerator.CreateField(frameObj));

});