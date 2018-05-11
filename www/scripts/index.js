// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        function checkConnection() {
            var networkState = navigator.connection.type;
            if (networkState == "none") {
                swal("Uwaga", "Aby korzystać z aplikacji potrzebujesz dostępu do internetu", "warning");
            }
        }

        checkConnection();

        function loingOnLoad() {
            var login = localStorage.getItem("login");
            var password = localStorage.getItem("password");
            if (localStorage.getItem("login") === null) {
                return
            }
            $.ajax({
                method: "POST",
                url: "http://projekty.propanek.xaa.pl/501stCommlink/login.php",
                data: {
                    username: login,
                    password: password,
                },
                success: function (data) {
                    var response = JSON.parse(data);
                    if (response[0] === "zalogowano") {
                        localStorage.setItem("zalogowano", "true");
                        localStorage.setItem("login", response[1]);
                        localStorage.setItem("password", response[2]);
                        localStorage.setItem("ranga", response[3]);
                    }
                    window.location.href = 'main.html';

                },
            });
        }
        loingOnLoad()
        // Handle the Cordova pause and resume events
        $("#register").on("click", function () {
            window.location.href = 'register.html';
        })

        $("#register_reg").on("click", function () {
            var login = $("#userName").val();
            if (login === "" || login === null || login === undefined) {
                swal("Błąd", "Musisz uzupełnić login", "error")
                return
            }
            var email = $("#userEmail").val()
            if (email === "" || email === null || email === undefined) {
                swal("Błąd", "Musisz uzupełnić email", "error")
                return
            }
            var password = $("#userPassword").val()
            var passwordRepeat = $("#userPasswordRepeat").val()
            if (password === "" || password === null || password === undefined) {
                swal("Błąd", "Musisz uzupełnić hasło", "error")
                return
            }
            if (passwordRepeat === "" || passwordRepeat === null || passwordRepeat === undefined) {
                swal("Błąd", "Musisz uzupełnić hasło", "error")
                return
            }
            if (password !== passwordRepeat) {
                swal("Błąd", "Hasła różnią się!", "error")
                return
            }
            $.ajax({
                method: "POST",
                url: "http://projekty.propanek.xaa.pl/501stCommlink/register.php",
                data: {
                    username: login,
                    password: password,
                    password_verify: passwordRepeat,
                    email: email
                },
                success: function (data) {
                },
            });
        })

        $("#login").on("click", function () {
            var login = $("#userName").val();

            if (login == "" || login == null || login == undefined) {
                swal("Błąd", "Musisz uzupełnić login", "error")
                return
            }
            var password = $("#userPassword").val()
            if (password == "" || password == null || password == undefined) {
                swal("Błąd", "Musisz uzupełnić hasło", "error")
                return
            }
            $.ajax({
                method: "POST",
                url: "http://projekty.propanek.xaa.pl/501stCommlink/login.php",
                data: {
                    username: login,
                    password: password,
                },
                success: function (data) {
                    var response = JSON.parse(data);
                    if (response[0] === "zalogowano") {
                        localStorage.setItem("zalogowano", "true");
                        localStorage.setItem("login", response[1]);
                        localStorage.setItem("password", response[2]);
                        localStorage.setItem("ranga", response[3]);
                        window.location.href = 'main.html';
                    }
                    else {
                        swal("błąd", response[0], "error")
                    }

                },
            });
        })
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();