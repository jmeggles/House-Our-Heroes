//Prorepublica bill search for coronavirus
$.ajax({
    url:"https://api.propublica.org/congress/v1/bills/search.json?query=coronavirus-housing",
    method:"GET",
    dataType: "json",
    headers:{'X-API-Key':'D4baiyH8PfzjJXFGBVMa5eWkcf6CtQwOIexmhBkm'}
}).then(function(data){
console.log(data)
}).catch(function(err){
    throw err
})

