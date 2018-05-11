
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        var content = localStorage.getItem("content");
        var ranga = localStorage.getItem("ranga");

        

        $.ajax({
            method: "POST",
            url: "http://projekty.propanek.xaa.pl/501stCommlink/content.php",
            data: {
                ranga: content
            },
            success: function (data) {
                var response = JSON.parse(data);

                for (var i = 0; i < response.length; i++) {
                    var data1 = new Date()
                    console.log(data1)
                    var data2 = new Date(response[i].data_do)
                    var timeDiff = Math.abs(data2.getTime() - data1.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    var checked = false;
                    if (response[i].read_it == "1") {
                        checked = true
                    }
                    else {
                        checked = false
                    }
                        if (response[i].color == "white") {
                            var color = "white"
                            console.log(checked)
                            $("#list").append("<div class='task' id='" + response[i].id + "'  style='width:100vw;  min-height:10%; padding-top:10px; padding-bottom:10px;height:100%; border-bottom: 1px black solid; font-size:20px; background-color:" + color + "'>Ilość dni do wykonania zadania: " + diffDays + " <br>potwierdzenie: <input class='task_check' type='checkbox' onclick='return false;'><br>" + response[i].content + "</div>")
                            $(".task_check").prop('checked', checked);
                        }
                        if (response[i].color == "yellow") {
                            var color = "#FFFF66"
                            $("#list").append("<div class='task' id='" + response[i].id + "'  style='width:100vw; min-height:10%; padding-top:10px; padding-bottom:10px;height:100%; border-bottom: 1px black solid; font-size:20px; background-color:" + color + "'>Ilość dni do wykonania zadania: " + diffDays + " <br>potwierdzenie: <input class='task_check' type='checkbox' onclick='return false;'><br>" + response[i].content + "</div>")
                            $(".task_check").prop('checked', checked);
                        }
                        if (response[i].color == "orange") {
                            var color = "orangered"
                            $("#list").append("<div class='task' id='" + response[i].id + "'  style='width:100vw; color:white; min-height:10%; padding-top:10px; padding-bottom:10px;height:100%; border-bottom: 1px black solid; font-size:20px; background-color:" + color + "'>Ilość dni do wykonania zadania: " + diffDays + " <br>potwierdzenie: <input class='task_check' type='checkbox' onclick='return false;'><br>" + response[i].content + "</div>")
                            $(".task_check").prop('checked', checked);
                        }
                        if (response[i].color == "red") {
                            var color = "crimson"
                            $("#list").append("<div class='task' id='" + response[i].id + "'  style='width:100vw; color:white;  min-height:10%; padding-top:10px; padding-bottom:10px;height:100%; border-bottom: 1px black solid; font-size:20px; background-color:" + color + "'>Ilość dni do wykonania zadania: " + diffDays + " <br>potwierdzenie: <input class='task_check' type='checkbox' onclick='return false;'><br>" + response[i].content + "</div>")
                            $(".task_check").prop('checked', checked);
                        }
                        
                }
                if (ranga == "Komandor") {
                    $("#list").append("<button type='button' id='add_task' class='btn btn-primary center-block' style='position: fixed; bottom: 0px; left: 0px;'>Dodaj zadanie</button>")
                    $("#add_task").on("click", function () {
                        localStorage.setItem("edytuj", false);
                        window.location.href = "task.html"
                    })
                    $(".task").on("click", function () {
                        var id = $(this).attr("id")
                        navigator.notification.confirm(
                            'Co chciałbyś zrobić z wybranym zadaniem?', // message
                            onConfirm,            // callback to invoke with index of button pressed
                            '',           // title
                            ['usuń', 'edytuj', 'anuluj']     // buttonLabels
                        );
                        function onConfirm(buttonIndex) {
                            if (buttonIndex == 1) {
                                $.ajax({
                                    method: "POST",
                                    url: "http://projekty.propanek.xaa.pl/501stCommlink/delete_task.php",
                                    data: {
                                        id: id,
                                        ranga: content,
                                    },
                                    success: function (data) {
                                        window.location.href = "content.html"

                                    }
                                });
                            }
                            if (buttonIndex == 2) {
                                localStorage.setItem("task_id", id);
                                localStorage.setItem("edytuj", true);
                                window.location.href = "task.html"
                            }
                            else {
                                // do nothing
                            }

                        }

                    })
                }
                else {
                    $(".task").on("click", function () {
                        var id = $(this).attr("id")
                        navigator.notification.confirm(
                            'Czy zatwierdzić przeczytanie wiadomości?', // message
                            onConfirm,            // callback to invoke with index of button pressed
                            '',           // title
                            ['zatwierdź', 'anuluj']     // buttonLabels
                        );
                        function onConfirm(buttonIndex) {
                            if (buttonIndex == 1) {
                                $.ajax({
                                    method: "POST",
                                    url: "http://projekty.propanek.xaa.pl/501stCommlink/confirm_task.php",
                                    data: {
                                        id: id,
                                        ranga: content,
                                    },
                                    success: function (data) {
                                        window.location.href = "content.html"

                                    }
                                });
                            }
                            else {
                                // do nothing
                            }

                        }

                    })
                }
                document.addEventListener("backbutton", BackButton, false);
                function BackButton() {
                    window.location.href = "main.html"
                }
                $("#back").on("click", function () {
                    window.location.href = "main.html"
                })
            }
        });
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();