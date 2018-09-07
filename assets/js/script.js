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
                text : "Recipe from The MealDB"
            });
            // console.log(recipeLink);

            // making the image a link
            resultDiv.prepend(image);
            $(image).wrap("<a href=" + "https://www.themealdb.com/meal.php?c=" + recipeId +" target='_blank'></a>");
            resultDiv.append(recipeLink);

            $("#foodResult").append(resultDiv);
        });

        
        // STATIC MOVIE CODE
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


        // DYNAMIC MOVIE CODE
        var selectedCuisine = [$("#dropDown option:selected").text()];
        var queryURL = "https://www.omdbapi.com/?apikey=d9666985&s=" + selectedCuisine;
        // console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response);
           $("#movieResult").empty();

           var result = response.Search.slice(0, 5);
        //    console.log(result);

           var movieDiv = $("<div class='movie'>");

            var movieSuggestion = result[Math.floor(Math.random()*result.length)];
            // console.log(movieSuggestion);
            movieDiv.append(movieSuggestion);

            var imgURL = movieSuggestion.Poster;
            var image = $("<img>").attr("src", imgURL);
            // movieDiv.prepend(image);

            var plotSource = movieSuggestion.imdbID;
            var plotURL = "https://www.imdb.com/title/" + plotSource + "/plotsummary?ref_=tt_ql_stry_2";
            var plotLink = $("<a />", {
                name : "link",
                href : plotURL,
                // text : "Plot from IMDB",
                target : "_blank"
            });
            // console.log(plotSource);
            // console.log(plotURL);
            movieDiv.prepend(image);
            // making the image a link
            $(image).wrap("<a href=" + plotURL + " target='_blank'></a>");
            movieDiv.append(plotLink);

            var movieTitle = movieSuggestion.Title;
            var titleText = $("<p>").text(movieTitle);
            movieDiv.append(titleText);

            var year = movieSuggestion.Year;
            var yearText = $("<p>").text(year);
            movieDiv.append(yearText);

           $("#movieResult").append(movieDiv);
        });

    });

});


