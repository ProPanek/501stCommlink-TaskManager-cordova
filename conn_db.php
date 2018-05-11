<?php
        //$connect=mysqli_connect('localhost','root','','angvalion') or die('błąd połączenia z baza danych');
        $connect=mysqli_connect('localhost','login','password','database') or die('błąd połączenia z baza danych');

           mysqli_query($connect,'set names UTF8');


?>
