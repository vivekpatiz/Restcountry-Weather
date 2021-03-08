var data = fetch("https://restcountries.eu/rest/v2/all");

data
  .then( (response)=> {
    return response.json();
  })
  .then((response)=> {
    restcountries(response)
    console.log(response)
})
  .catch(function (err) {
    console.log(err);
  });

function restcountries(response){
for(i in response){
    createdata(i,response)
}
 
}

var container = document.createElement("div");
container.setAttribute("class", "container bg");
var row = document.createElement("div");
row.setAttribute("class", "row");
function createdata(i,data){
var col = document.createElement("div");
col.setAttribute("class", "col-lg-4 card shadow");
var header = document.createElement("div");
header.setAttribute("class", "card-header");
header.innerText = data[i].name;
var body = document.createElement("div");
body.setAttribute("class", "card-body");
var image = document.createElement("img");
image.src = data[i].flag;
var capital = document.createElement("div");
capital.innerText = "Capital :"+" "+ data[i].capital;
var region = document.createElement("div");
region.innerText = "Region :"+" " + data[i].region;
var countrycode = document.createElement("div");
countrycode.innerText ="Country Code :"+" "+ data[i].alpha3Code;
var button =  document.createElement("button");
var weathercountry = data[i].capital;
button.setAttribute("class", "btn btn-warning");
button.innerText = "Weather";
button.addEventListener('click',function(){
    var result = fetch('https://api.openweathermap.org/data/2.5/weather?q='+weathercountry+'&appid=450767ab95b7a0a89f79899717edcde5')

result
.then( (weatherresult)=> {
    return weatherresult.json();
  })
  .then((weatherresult)=> {
    alert(+weatherresult.main.temp+'\n'+ +weatherresult.coord.lon+'\n'+ + weatherresult.coord.lat )
})
  .catch(function (err) {
    alert("err");
  });


});

body.append(image, capital, region, countrycode,button);
col.append(header, body );
row.append(col);
container.append(row);
document.body.append(container);

}

