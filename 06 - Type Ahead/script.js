const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []
fetch(endpoint)
.then(response => response.json())
.then(data => {
    cities.push(...data);
});
function FindMatch(word, cities){
    return cities.filter(place => {
      const Regex = new RegExp(word, 'gi');
      return place.city.match(Regex) || place.state.match(Regex); 
    })
}
function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
function DisplayMatch(){
   const matches = FindMatch(this.value, cities);
   const result = matches.map(place => {
     const Regex = RegExp(this.value, 'gi');
     const cityName = place.city.replace(Regex, `<span class="hl">${this.value}</span>`);
     const stateName = place.state.replace(Regex, `<span class="hl">${this.value}</span>`);
     const population = place.population.replace(Regex, `<span class="hl">${this.value}</span>`);

     return `
        <li>
          <span class = "name">${cityName}, ${stateName}</span>
          <span class = "population">${addCommas(population)}</span>
        </li>
     
     
     
     `
   }).join('')
   suggestions.innerHTML = result;
    
}
const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
searchInput.addEventListener('change', DisplayMatch);
suggestions.addEventListener('keyup', DisplayMatch);