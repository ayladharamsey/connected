import React from 'react';


export const NewsContainer = (countryOptions) => {
    const options = countryOptions.map(country => {
        return <option value ={country}>{country}</option>
    })
    
    return (
        <section>
            <select name ="countries">
                {options}
            </select>

        </section>
    )
}