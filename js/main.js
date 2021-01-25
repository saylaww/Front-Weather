$(document).ready(function () {
   $("#open").click(function () {
   // var c= document.getElementById("city").value;
       var c= $("#txt").val();
       // alert("bas"+c);
       // console.log(c);
        $(".city").text("CITY: "+ c);
        $(".current").css("background-image", "url(./london.jpeg)");

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + c + "&appid=4fe48ed053b93226297c6e65619b0194";

        $.getJSON(url, function (result) {
            // console.log(result.main.temp - 273.15);
            var num = result.main.temp - 273.15;
            $(".temp").text(num.toFixed(0) + "°");
            $(".wind").text("WIND: "+ result.wind.speed);
        });

   })
});