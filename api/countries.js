function countryapiload() {
    fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data=>displaycountires(data))
}

const displaycountires = Countries => {
    const countriesContainer = document.getElementById('all-Countries')
    // for (item of data) {
    //     console.log(country);
    // }
    Countries.forEach(country => {
        const Countrydiv = document.createElement('div');
        Countrydiv.classList.add('countryclass');
        Countrydiv.innerHTML = `
         <h3>Name: ${country.name.common}</h3>
         <h4>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</h4>
         <button onclick="displayCountrydetalis('${country.cca2}')">Details</button>

        
        `
        countriesContainer.appendChild(Countrydiv);
        console.log(country);

    });
}
const displayCountrydetalis = code => {
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(onedata => displaydata(onedata[0]))
}

const displaydata = item => {
        const countryContainer = document.getElementById('country-detail')
        countryContainer.innerHTML = `
         <h3>Name: ${item.name.common}</h3>
         <img src="${item.flags.png}" />
        `
        console.log(item);
    }
// const displayCountrydetalis = code => {
//     console.log('details loading',code);
// }

countryapiload();