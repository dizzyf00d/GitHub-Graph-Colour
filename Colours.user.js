// ==UserScript==
// @name         GitHub Contribution Graph Colour Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modifies your GitHub contribution graph colour.
// @author       dizzyf00d
// @match        https://github.com/*
// @icon         https://github.com/fluidicon.png
// @grant        none
// ==/UserScript==

// Yearly Contribution Calendar
var contributionDay = document.getElementsByClassName("ContributionCalendar-day");

// Timeline Item: % of commits in [month].
//var contributionPercentByMonth = document.getElementsByClassName("Progress-item rounded-2");

// Timeline Item: Joined GitHub/First GitHub [action].
//var colourSuccess = document.getElementsByClassName("color-fg-success");

// Activity Overview.
// (js-highlight-blob) (stroke)
// (activity-overview-axis)
// (activity-overview-point) (fill)

// GitHub Colours:
// #39d353 - More
// #26a641
// #006d32
// #0e4429 - Less

// Our set colours:
var DATA_LEVEL_4 = '#4FC3F7';
var DATA_LEVEL_3 = '#03A9F4';
var DATA_LEVEL_2 = '#0288D1';
var DATA_LEVEL_1 = '#01579B';
var DATA_LEVEL_0;

(function () {
    'use strict';

    for (var i = 0; i < contributionDay.length; i++) {
        var currDay = contributionDay[i];
        var countDay = parseInt(currDay.getAttribute("data-level"));

        if (countDay >= 4) {
            currDay.style.fill = DATA_LEVEL_4;
        } else if (countDay >= 3) {
            currDay.style.fill = DATA_LEVEL_3;
        } else if (countDay >= 2) {
            currDay.style.fill = DATA_LEVEL_2;
        } else if (countDay >= 1) {
            currDay.style.fill = DATA_LEVEL_1;
        } else {
            currDay.style.fill = DATA_LEVEL_0;
        }
    }
})();
