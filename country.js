const queryName = new URLSearchParams(window.location.search).get('name')
console.log(queryName)

fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
.then(res => res.json())
.then((country) => {
    country.data.forEach((item) => {
    const container = document.querySelector('.main')
    const countryDetails = document.createElement('div')
    countryDetails.classList.add('country-details')
    if(item.name == queryName){
      countryDetails.innerHTML =`
            <img src=${item.flag}>
            <div class="details-text-container">
            <div class="head"> <h1><span>${item.name}</h1></span>
             <span class ="code"></span>
              </div>
                <div class="details-text">
                </div>
                    <div class="states">
                    <p><b> States : </b></p>
                    <div class="Cities">
                    <p><b> Cities : </b></p>
                    </div>
                 </div>
            </div>
      `  
      container.append(countryDetails)
    }
  })
})

fetch('https://countriesnow.space/api/v0.1/countries/codes')
.then(res => res.json())
.then((code)=>{
  code.data.forEach((item)=>{
  const countryCo = document.querySelector('.code')
  const countryCode = document.createElement('p')
  if(item.name == queryName){
     countryCode.innerHTML =`
     (${item.code})
     `
    countryCo.append(countryCode) 
   }
  })
})

fetch('https://countriesnow.space/api/v0.1/countries/capital')
.then(res => res.json())
.then((capital) =>{
  capital.data.forEach((item) => {
    const countryCap = document.querySelector('.details-text')
    const countryCapital = document.createElement('p')
    if(item.name == queryName){
      countryCapital.innerHTML =`
      <b> Capital : </b>${item.capital}
      `
      countryCap.append(countryCapital)
    }
  })
})
fetch('https://countriesnow.space/api/v0.1/countries/codes')
.then(res => res.json())
.then((codes) =>{
  codes.data.forEach((item) =>{
   const countryDialCod = document.querySelector('.details-text')
   const countryDialCode = document.createElement('p')
   if(item.name == queryName){
    countryDialCode.innerHTML =`
    <b> Dial-Codes : </b>${item.dial_code}
    `
    countryDialCod.append(countryDialCode)
   }
  })
})
fetch('https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode')
.then(res => res.json())
.then((currency) => {
  currency.data.forEach((item) =>{
  const countryCurr = document.querySelector('.details-text')
  const countryCurrency = document.createElement('p')
  if(item.name == queryName){
   countryCurrency.innerHTML =`
   <b> Currency : </b>${item.currency}
   `
   countryCurr.append(countryCurrency)
   }
  })
})
fetch('https://countriesnow.space/api/v0.1/countries/population')
.then(res => res.json())
.then((population) =>{
    population.data.forEach((item) => {
    const countryPop = document.querySelector('.details-text')
    const countryPopulation = document.createElement('p')
    if(item.country == queryName){
    countryPopulation.innerHTML =`
    <b> Population : </b>${item.populationCounts[58].value.toLocaleString('en-IN')}  
     `
     countryPop.append(countryPopulation)
    }
   })
})
fetch('https://countriesnow.space/api/v0.1/countries/states')
.then(res => res.json())
.then((states) => {
  let count = 0;
  states.data.forEach((item) =>{
  if(item.name == queryName){
  item.states.forEach((country)=>{
  if(count < 12 ){
  const countrySta = document.querySelector('.states p')
  const countryStates = document.createElement('span')
    countryStates.innerHTML =`
       ${country.name}
    `
    countrySta.append(countryStates)
    
    count ++
          }
       })
     }
    })
  })
  fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
  .then(res => res.json())
  .then((city) =>{
    let count = 0;
    city.data.forEach((item) =>{
    if(count<5){
    if(item.country == queryName){
    const countryCity = document.querySelector('.Cities')
    const countryCounts = document.createElement('span')
      countryCounts.innerHTML =`
      ${item.city}
      `
     countryCity.append(countryCounts)

     count ++
       }
      }
    })
  })

  