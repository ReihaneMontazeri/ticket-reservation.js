let country = document.querySelector('.countrySelect');
let selectCity = document.querySelector('.citySelect');
let option = document.querySelectorAll('.option')

let dataObj = {
    Iran: ['esfahan', 'shiraz', 'tehran', 'mashhad', 'tabriz'],
    Canada: ['vancouver', 'toronto'],
    southkorea: ['seoul', 'jeju', 'incheon'],
    US: ['boston', 'chicago', 'LosAngeles', 'NewYork']
};


country.addEventListener("change", function(){
    if(country.value === 'Please Select'){
        selectCity.innerHTML = ""
        selectCity.innerHTML  += "<option>Select City</option>";
    }else{
        let countryValue = country.value;
        let selectedCountryCities = dataObj[countryValue]
        selectCity.innerHTML = ""
        selectedCountryCities.forEach(function(city) {
            selectCity.innerHTML += '<option value="' + city + '">' + city + '</option>';
    })
    }
    
})

