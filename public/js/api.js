//Prorepublica bill search for coronavirus
$(function () {
    $("#billBtn").on("click", function (event) {
        event.preventDefault();
        console.log("click")

        var billSearch = $("#billSearch").val()
        console.log(billSearch)

        //call to api.
        $.ajax({
            url: "https://api.propublica.org/congress/v1/bills/search.json?query=" + billSearch,
            dataType: "json",
            headers: { 'X-API-Key': 'D4baiyH8PfzjJXFGBVMa5eWkcf6CtQwOIexmhBkm' }
        }).then(function (response) {
            console.log(response)


            // const billArray = []
            for (var i = 0; i < response.results[0].bills.length; i++) {

                // gather the response
                var num = response.results[0].bills[i].number;
                var title = response.results[0].bills[i].title;
              
                // create a child container and set the text
                var newDiv = $("<div>");
                newDiv.text("* " + num +" - "+ title)
              
                // append this new child container to the parent container
                $(".result").prepend(newDiv)
                $(".animated").addClass(".fadeInUp")
              
              }
            // console.log(title)
            
            window.location("./resources")
            
            


        })
    });

});

$(function () {
    $("#dataBtn").on("click", function (event) {
        event.preventDefault();
        console.log("clickyclickyclicky")

    })
});



