import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const url = " https://restcountries.eu/rest/v2/all "

const Ulkeler = () => {
     const [ulke,setUlkeler] = useState([])
     const fetchUlkerinVerisi =async() => {
        const response = await fetch(url)
        const ulke = await response.json()
        setUlkeler(ulke)
        console.log(ulke)
     }
   
     useEffect(() => {
        fetchUlkerinVerisi()
     },[])
    
     return (
     <>
      <section className="grid">
      {ulke.map((country) => {
         const {numericCode, name, capital, region, flag} = country
       
           return <article key={numericCode}>
              
              <img src={country.flag} alt={country.name} />
                 <div ClassName = "details">
                 <h3 className="country-name">{name}</h3>
               <h4 className="capital-name">Capital: <span>{capital}</span></h4>
               <h4>Region: <span>{region}</span></h4>
                <Link to={'/ulke/${name}'}>More Info</Link>
                 </div>
              
           </article>
   
      })}
      </section>

      </>
      )   

    }
export default Ulkeler