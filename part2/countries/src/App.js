import React, {useState, useEffect} from "react";
import axios from "axios";

const Show = ({filter}) => {

  return (
    <div>
      <input onChange={filter} />
      
    </div>
  )
}

const Li = ({listOfc, onClick, buttonValue}) => {

  return (
    <li> {listOfc} <button value={buttonValue} onClick={onClick}>SHOW COUNTRY</button></li>
  )
}

const SingleResult = ({countryInfo, weatherInfo}) => {

  
  return (
    <div id="country-info" style={{ display: 'none' }}>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital: {countryInfo.capital[0]} </p>
      <p>Population: {countryInfo.population} </p>

      <h3>Languages</h3>
      <ul>
        {Object.keys(countryInfo.languages).map(function (key) { 
          return <li>
            {countryInfo.languages[key]}
          </li>;
        })}
      </ul>
      <h3>Flag</h3>
      <img src={countryInfo.flags.png} />
      <div>
        <h2>Weather in {countryInfo.capital[0]}</h2>
        <p>Temperature: {weatherInfo.weather[0].main} Description: {weatherInfo.weather[0].description}</p>
        <p>Wind: {weatherInfo.wind.speed} mph</p>
      </div>
    </div>
  )
}

function App({dummyData}) {

  const [countries, setCountries] = useState([]);
const [weather, setWeather] = useState([])
  const [countryToShow, setCountryToShow] = useState(dummyData);
  

  const country = countries.map((country, i) => country.name.common.toUpperCase());
  const displayedCountry = countries.map((country, i) => country);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log("promise Fulfilled");
        setCountries(response.data);
      })
  }, [])

  useEffect(() => {
    const weatherCapital = countryToShow.capital[0];
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCapital}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
         console.log(response.data)
         setWeather(response.data)
      })
  },[])

  

  const handleFilter = (event) => {
    console.log('yes')
    
    const ul = document.getElementById('country-list');

    const li = ul.getElementsByTagName("li");
    const input = event.target.value;
    let newCons = country.toString();
    
    const displayDiv = document.getElementById('country-info');

    const  countOccurences = (string, word) => {
      return string.split(word).length - 1 ;
    }
   
   let count=countOccurences(newCons.toUpperCase(), input.toUpperCase());


    Array.from(li).forEach(i => {

      const details = i;
      
      const newDetails = details.textContent.toUpperCase();

      const nawa = newDetails.indexOf(input.toUpperCase());
      
      
      if (input.length === 0) {

        ul.style.display = 'none';

      } else if (count > 10) {
        
        details.style.display = 'none';

      } else if (newDetails.indexOf(input.toUpperCase()) > -1 && count > 1) {
        displayDiv.style.display = "none";
        details.style.display = "";
        ul.style.display = '';
        
      } else if (count === 1 ) {
        displayDiv.style.display = "";
        details.style.display = 'none';
        ul.style.display = 'none';

        countries.forEach((count, index) => {
          let newCountry =count.name.common.toUpperCase();
          if (newCountry.startsWith(input.toUpperCase())) {
            setCountryToShow(displayedCountry[index])
            console.log("Yipeeeee")
          }
        })
        
      }   else {

        details.style.display = 'none';
      }
    })
    // const final = listLength.filter(w => w > -1)
    //   console.log(final.length)
  }

  const showCountry = (event) => {

    console.log("Ready T0 Show", event.target.value);
    const displayDiv = document.getElementById('country-info');
    displayDiv.style.display = "";
    return setCountryToShow(displayedCountry[event.target.value])
  }
  
  console.log(countryToShow)
  return (
    <div>
    
    <Show filter={handleFilter}/>
    <ul style={{ display: 'none' }} id="country-list" >
      {countries.map((country, i) => {

        return <Li listOfc={country.name.common} onClick={showCountry} buttonValue={i}/>
      })}
    </ul>

    
    <SingleResult  countryInfo={countryToShow} weatherInfo={weather} />
    </div>
  );
}

export default App;
