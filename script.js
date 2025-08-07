const countriesContainer = document.querySelector('.Countries-container')

fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
.then(res => res.json())
.then(response => {
    response.data.forEach(country => {

        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `/country.html?name=${country.name}`
        countryCard.innerHTML = `
        <img src="${country.flag}" alt="country.name flag" />
        <div class="card-text">
            <h3 class="card-title">${country.name}</h3> 
        </div>
`

countriesContainer.append(countryCard)
  })
})




