
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener("backbutton", BackButton, false);
        function BackButton() {
            window.location.href = "content.html"
        }
        $("#back").on("click", function () {
            window.location.href = "content.html"
        })
        // Handle the Cordova pause and resume events
        var edytuj = localStorage.getItem("edytuj");
        edytuj = JSON.parse(edytuj)
        var content = localStorage.getItem("content");
        console.log(edytuj)
        if (edytuj) {
            var id = localStorage.getItem("task_id");
            $("#container").append("<button type='button' id='edit_task' class='btn btn-primary center-block' style='position: fixed; bottom: 0px; left: 0px;'>Edytuj zadanie</button>")

            $.ajax({
                method: "POST",
                url: "http://projekty.propanek.xaa.pl/501stCommlink/get_task.php",
                data: {
                    id: id,
                    ranga: content
                },
                success: function (data) {
                    var response = JSON.parse(data);
                    $("#zadanie").val(response[0].content)
                    $("#color_select").val(response[0].color)
                    $("#data_od").val(response[0].data_od)
                    $("#data_do").val(response[0].data_do)
                }
            });
            $("#edit_task").on("click", function () {
                var task = $("#zadanie").val()
                var color = $("#color_select").val()
                var data_od = $("#data_od").val()
                var data_do = $("#data_do").val()
                var color_weight;
                if (color == "white") {
                    color_weight = 0;
                }
                else if (color == "yellow") {
                    color_weight = 1;
                }
                else if (color == "orange") {
                    color_weight = 2;
                }
                else if (color == "red") {
                    color_weight = 3;
                }

                $.ajax({
                    method: "POST",
                    url: "http://projekty.propanek.xaa.pl/501stCommlink/edit_task.php",
                    data: {
                        id: id,
                        ranga: content,
                        content: task,
                        color: color,
                        color_weight: color_weight,
                        data_od: data_od,
                        data_do: data_do
                    },
                    success: function (data) {
                        window.location.href = "content.html"

                    }
                });
            })

            localStorage.setItem("edytuj", false);
        }
        else {
            $("#container").append("<button type='button' id='add_task' class='btn btn-primary center-block' style='position: fixed; bottom: 0px; left: 0px;'>Dodaj zadanie</button>")
            $("#add_task").on("click", function () {
                localStorage.setItem("edytuj", false);
                var task = $("#zadanie").val()
                var color = $("#color_select").val()
                var data_od = $("#data_od").val()
                var data_do = $("#data_do").val()
                var color_weight;
                if (color == "white") {
                    color_weight = 0;
                }
                else if (color == "yellow") {
                    color_weight = 1;
                }
                else if (color == "orange") {
                    color_weight = 2;
                }
                else if (color == "red") {
                    color_weight = 3;
                }

                $.ajax({
                    method: "POST",
                    url: "http://projekty.propanek.xaa.pl/501stCommlink/add_task.php",
                    data: {
                        ranga: content,
                        task: task,
                        color: color,
                        color_weight: color_weight,
                        data_od: data_od,
                        data_do: data_do
                    },
                    success: function (data) {
                        window.location.href = "content.html"

                    }
                });
            })
        }

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();