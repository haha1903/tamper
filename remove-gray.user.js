// ==UserScript==
// @name         remove-gray
// @namespace    http://jpsss.com/
// @version      1.0
// @description  remove the gray color from the world!
// @author       Hai Chang
// @match        *://*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

$(function() {
    $('html').css('-webkit-filter', 'grayscale(0)');
    $('html > body').css('-webkit-filter', 'grayscale(0)');
});
