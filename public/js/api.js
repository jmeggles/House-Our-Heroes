//Prorepublica bill search for coronavirus
$(function () {
    $("button").on("click", function (event) {

        var billSearch = $("#billSearch").val()
        console.log(billSearch)
    });
    //call to api.
    $.ajax({
        url: "https://api.propublica.org/congress/v1/bills/search.json?query=" + billSearch,
        method: "GET",
        dataType: "json",
        headers: { 'X-API-Key': 'D4baiyH8PfzjJXFGBVMa5eWkcf6CtQwOIexmhBkm' }
    }).then(function (response) {
        // console.log(response.results[0].bills[i].title)
        console.log(response)
        
        const billArray = []
        for (var i = 0; i<response.results.title.length; i++){
            

        }
    })
   
    
});



