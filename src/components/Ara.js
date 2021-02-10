import React from 'react'

const Ara = () => {
    
    window.addEventListener('DOMContentLoaded', () =>{
        const search = document.getElementById("search")

     search.addEventListener('click', (e) => {
         const { value } = e.target

         const BaskentAdi = document.querySelectorAll('.capital-name')

         BaskentAdi.forEach((capital) => {
             if(capital.innerText.toLowerCase().includes(value.toLowerCase)){
                capital.parentElement.style.display = 'block'
             }else{
                capital.parentElement.style.display = 'none'
             }
         })
     })
    }
    )

    return (
       <section className="ara">
           <form className="form-control">
               <input type="search" name="search" id="search"
               placeholder="Başkenti arama yapınız" />
           </form>
           <div>
               <select name="select" id="select" className="select">
                   <option value="Filter by city">Filter by city</option>
                   <option value="Africa">Africa</option>
                   <option value="Asia">Asia</option>
                   <option value="Americas">Americas</option>
                   <option value="Europe">Europe</option>
                   <option value="Polar">Polar</option>
                   <option value="Oceania">Oceania</option>
               </select>
           </div>
       </section>
    )
}

export default Ara
