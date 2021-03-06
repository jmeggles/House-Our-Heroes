/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */

/* eslint-disable indent */

/* eslint-disable linebreak-style */
/* eslint-disable quotes */
//Prorepublica bill search for coronavirus
$(function billsearch() {
    $("#reset").hide();
    // eslint-disable-next-line indent
    // eslint-disable-next-line linebreak-style
    $("#billBtn").on("click", function(event) {
        event.preventDefault();
        $("#data-container").hide();
        $("#billBtn").hide();
        $("#reset").show();
        
        console.log("click");

        var billSearch = $("#billSearch").val();
        console.log(billSearch);

        //call to api.
        $.ajax({
            url: "https://api.propublica.org/congress/v1/bills/search.json?query=" + billSearch,
            dataType: "json",
            headers: { 'X-API-Key': 'D4baiyH8PfzjJXFGBVMa5eWkcf6CtQwOIexmhBkm' }
        }).then(function(response) {

            console.log(response);
            for (var i = 0; i < 10; i++) {
                // gather the response
                var num = response.results[0].bills[i].number;
                var title = response.results[0].bills[i].title;
                // create a child container and set the text
                var newDiv = $("<div>");
                newDiv.text("* " + num + " - " + title);
                // append this new child container to the parent container
                $(".result").prepend(newDiv);
            }
          
        });

    });
});



$(function datasearch() {
    $("#data-reset").hide();
    $("#data-drop").hide();
    $("#dataBtn").on("click", function datasearch(event) {
        event.preventDefault();
        $("#data-reset").show();
        $("#bill-container").hide();
        $("#dataBtn").hide();
        $("#data-drop").show();
        $("#billSearch").hide();


        var stateEl = document.getElementById("state-selection");
        var stateValue = stateEl.options[stateEl.selectedIndex].value;
        console.log(stateValue);
        // route sending in to state db
        $.get("/api/resources/" + stateValue, function(data) {
            // render data on page
            console.log(data);
            let trEl = $("<tr>");
            let thEl = $("<th scope='row'>" + data.state + "</th>");
            let posTd = $("<td>" + data.positive + "</td>");
            let negTd = $("<td>" + data.negative + "</td>");
            let hospEl = $("<td>" + data.hospitalizedCurrently + "</td>");
            // let ventEl = $("<td>" + data.onVentilatorCurrently + "</td>");
            // let recEl = $("<td>" + data.recovered + "</td>");
            let deathEl = $("<td>" + data.death + "</td>");
            let endTr = $("</tr>");
            $(".table-body").append(trEl, thEl, posTd, negTd, hospEl, deathEl, endTr);
        });
    });
});



