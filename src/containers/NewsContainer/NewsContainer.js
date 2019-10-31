import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countryReducer } from '../../reducers/countryReducer';
import { bindActionCreators } from 'redux';
import { chooseCountry } from '../../actions';



export class  NewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstCountry: '',
            secondCountry: '',
            thirdCountry: ''
        }
    }

    updateCountry = e => {
        console.log(e.target.name)
    }
    
    render () {
        const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 
                        'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 
                        'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 
                        'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua',
                        'us', 've', 'za'];
        const options = countries.map(country => {
            return <option value ={country}>{country}</option>
        })

        return (
            <section>
                <select name="first-country" onChange={this.updateCountry}>
                    <option selected="selected"> Select First Country </option>
                    {options}
                </select>
                <select name="second-country" onChange={this.updateCountry}>
                    <option selected="selected"> Select Second Country </option>
                    {options}
                </select>
                <select name="third-country" onChange={this.updateCountry}>
                    <option selected="selected"> Select Third Country </option>
                    {options}
                </select>
            </section>
        )
    }
}

export const mapStateToProps = state => ({
    countryOptions: state.countryReducer
})

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
        chooseCountry
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);