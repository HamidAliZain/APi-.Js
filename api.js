let container = document.getElementById("main-container");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/pakistan");
request.send();

request.addEventListener("load", function () {
  const [Data] = JSON.parse(this.responseText);
  console.log(Data  );
  const htmlData = `
  <div class="c3ontainer"><img src="${Data.flags.png}" alt=".logo" /></div>
  <h1 class="text-green">${Data.name.common}</h1>
  <div class="des">
    <h4><span class="text-green" ><strong>Capital</strong> </span> : ${Data.capital}</h4>
    <h4><span class="text-green" ><strong>Population </strong></span> :  ${Data.population}</h4>
    <h4><span class="text-green" ><strong>Continents </strong></span> :  ${Data.continents}</h4>
    <h4><span class="text-green" ><strong>Official </strong></span> :  ${Data.name.official}</h4>
  </div>`;
  container.insertAdjacentHTML("afterbegin", htmlData);
});
