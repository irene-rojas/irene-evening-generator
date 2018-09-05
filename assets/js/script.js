$(document).ready(function() {

    $("#submit").click(function() {
        var selection = $("#dropDown option:selected").text();
        var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + selection;
        // console.log(selection);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
            $("#foodResult").empty();

            var resultDiv = $("<div class='foodResult'>");

            var chosenMeal = response.meals[Math.floor(Math.random() * response.meals.length)];

            var imgURL = chosenMeal.strMealThumb;
            var image = $("<img>").attr("src", imgURL);

            var name = chosenMeal.strMeal;
            var foodName = $("<p>").text(name);
            resultDiv.append(foodName);

            // console.log(recipeId);
            var recipeId = chosenMeal.idMeal;
            var recipeLink = $("<a />", {
                name : "link",
                href : "https://www.themealdb.com/meal.php?c=" + recipeId,
                text : "Recipe"
            });
            // console.log(recipeLink);

            resultDiv.prepend(image);
            $(image).wrap("<a href=" + "https://www.themealdb.com/meal.php?c=" + recipeId +" target='_blank'></a>");
            resultDiv.append(recipeLink);

            $("#foodResult").append(resultDiv);
        });

        
        // WORKING MOVIE CODE
        // var movieArray = ["Jurassic Park", "Inception", "The Muppets", "Inside Out", "Gravity", "Slumdog Millionaire", "The Notebook"];
        // var randomMovie = movieArray[Math.floor(Math.random()*movieArray.length)];

        // $.ajax({
        //     url: "https://www.omdbapi.com/?apikey=d9666985&t=" + randomMovie,
        //     method: "GET"
        // }).then(function(response) {
        //    $("#movieResult").empty();

        //    var movieDiv = $("<div class='movie'>");

        //     var imgURL = response.Poster;
        //     var image = $("<img>").attr("src", imgURL);
        //     movieDiv.prepend(image);


        //    $("#movieResult").append(movieDiv);
        // });



        // EXPERIMENTAL MOVIE CODE
        var selectedCuisine = [$("#dropDown option:selected").text()];
        var queryURL = "https://www.omdbapi.com/?apikey=d9666985&s=" + selectedCuisine;
        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
           $("#movieResult").empty();

           var result = response.Search.slice(0, 5);
           console.log(result);

           var movieDiv = $("<div class='movie'>");

            var movieSuggestion = result[Math.floor(Math.random()*result.length)];
            console.log(movieSuggestion);
            movieDiv.append(movieSuggestion);

            var imgURL = movieSuggestion.Poster;
            var image = $("<img>").attr("src", imgURL);
            movieDiv.prepend(image);

            var title = movieSuggestion.Title;
            var titleText = $("<p>").text(title);
            movieDiv.append(titleText);

            var plot = movieSuggestion.Plot;
            var plotText = $("<p>").text(plot);
            movieDiv.append(plotText);

           $("#movieResult").append(movieDiv);
        });



    });



});


