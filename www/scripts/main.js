
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        var ranga = localStorage.getItem("ranga");
        var login = localStorage.getItem("login");

        var rangArray = ['EXO', 'MJR', 'CPT', 'LT', 'SLT']
        if (ranga == "Komandor") {
            for (var i = 0; i < rangArray.length; i++) {
                $("#rangi").append("<div class='col-sm-6'><div id= '" + rangArray[i].toUpperCase() + "' style='width:100%;  border-bottom: 1px solid grey; height:16.5vh; vertical-align: middle;line-height: 17vh;' > <img src='images/" + rangArray[i].toLowerCase() + ".png' /> <span style='font-size:5vh; padding-left:10vw'>" + rangArray[i].toUpperCase() + "</span></div ></div >")
            }
        }
        else {
            $("#rangi").append("<div class='col-sm-6'><div id= '" + ranga.toUpperCase() + "' style='width:100%;  border-bottom: 1px solid grey; height:16.5vh; vertical-align: middle;line-height: 17vh;' > <img src='images/" + ranga.toLowerCase() + ".png' /> <span style='font-size:5vh; padding-left:10vw'>" + ranga.toUpperCase() + "</span></div ></div >")
        }
        

        $("#header").html(ranga + " " + login)
        $("#logout").on("click", function () {
            localStorage.clear();
            window.location.href = 'index.html';

        })
        $("#EXO").on("click", function () {
            localStorage.setItem("content", "EXO")
            window.location.href = 'content.html';
        })
        $("#MJR").on("click", function () {
            localStorage.setItem("content", "MJR")
            window.location.href = 'content.html';
        })
        $("#CPT").on("click", function () {
            localStorage.setItem("content", "CPT")
            window.location.href = 'content.html';
        })
        $("#LT").on("click", function () {
            localStorage.setItem("content", "LT")
            window.location.href = 'content.html';
        })
        $("#SLT").on("click", function () {
            localStorage.setItem("content", "SLT")
            window.location.href = 'content.html';
        })
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();