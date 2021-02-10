import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'

const Ulke = () => {
    const [country,setCountry] = useState([])
    const {capital} = useParams()

   useEffect(() => {
      const fetchCountryData = async () => {
          const response = await fetch(
              'https://restcountries.eu/rest/v2/capital/${capital}'
          )
          const city = await response.json
          setCountry(city)
          console.log(city)
      }
      fetchCountryData()
}, [])
    return (
        <>
        <link to="/">
        <i className="fas fa-arrow-left"></i>Back Home
        </link>
           <h1>city data </h1>
        </>
    )
}

export default Ulke

