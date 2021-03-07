

fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data =>
    {
    for(i in data){
        var bd = creDOM('div','card wid','');
        var imgsrc = data[i].flag;
        var img = creDOM('img','card-img-top','',imgsrc);
        var cardbody = creDOM('div','card-body');
        var tit = data[i].name;
        var wea = [];
        var name = title('h4','card-title text-center','',tit);
        var capp = "<b>Capital: </b>"+ data[i].capital;
        var cap = title('p','card-text text-center','',capp);
        var reg = "<b>Region: </b>"+ data[i].region;
        var region = title('p','card-text text-center','',reg);
        var cd = "<b>Country Code: </b>"+ data[i].alpha3Code;
        var code = title('p','card-text text-center','',cd);
        var btn_center = document.createElement('div');
        btn_center.setAttribute('class','text-center'); 
        {var sol = data[i].name;
        var val = 'http://api.openweathermap.org/data/2.5/weather?q='+sol+'&appid=c15b1648ee4adfdc9a5660cff0af3885';
        wea[i] = val;
        }
        var ar = title('input','btn btn-dark',i,'weather','button','weather()');
        btn_center.appendChild(ar);
        cardbody.append(name,cap,region,code,btn_center);
        bd.append(img,cardbody);
        document.body.append(bd); 
        
      
}
    
    function creDOM(eleName,eleClass,eleId,elesrc){
        var ele = document.createElement(eleName);
        ele.setAttribute("class",eleClass);
        ele.setAttribute('id',eleId);
        ele.setAttribute('src',elesrc);
        return ele;
    }
    function weather(){
        alert('http://api.openweathermap.org/data/2.5/weather?q='+tit+'&appid=c15b1648ee4adfdc9a5660cff0af3885');
    }
    function title(eleName,eleClass,eleId,eletit,eletype,elefunc){
        var ele = document.createElement(eleName);
        ele.setAttribute("class",eleClass);
        ele.setAttribute('id',eleId);
        ele.setAttribute('value',eletit);
        ele.setAttribute('type',eletype);
        ele.innerHTML = eletit;
        ele.setAttribute('onclick',elefunc);
        return ele;
    }
   
    }
);

