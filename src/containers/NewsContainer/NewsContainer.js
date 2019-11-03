import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseCountry, setNewsData } from '../../actions/index';
import { getNewsData } from '../../apiCalls';
import CardContainer from '../CardContainer/CardContainer';
import './NewsContainer.scss'

export class  NewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            firstCountry: '',
            secondCountry: '',
            thirdCountry: '',
            firstCountryData: [],
            secondCountryData: [],
            thirdCountryData: []
        }
    }

    updateCountry = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = () => {
        const { chooseCountry } = this.props;
        const countryInfo = [this.state.firstCountry, this.state.secondCountry, this.state.thirdCountry];
        countryInfo.forEach(country => country ? chooseCountry(country): null)
        this.filterNewsData();
    }
    
    filterNewsData = async () => {
        try {
            if(this.state.firstCountry){
                var countryOneData = await getNewsData(this.state.firstCountry);
                this.setState({
                    firstCountryData: countryOneData
                })
            }

            if(this.state.secondCountry) {
                var countryTwoData = await getNewsData(this.state.secondCountry);
                this.setState({
                    secondCountryData: countryTwoData
                })
            }

            if(this.state.thirdCountry) {
                var countryThreeData = await getNewsData(this.state.thirdCountry);
                this.setState({
                    thirdCountryData: countryThreeData
                })
            }

            this.props.setNewsData([countryOneData, countryTwoData, countryThreeData])
        } catch (error) {
            return error.message
        }
    }

    checkNavData = (navStatus, country) => {
        const { favorites, completed, newsData } = this.props;
        let data;
        if (navStatus === 'saved') {
            data = favorites ? favorites.filter(favorite => favorite.column === country) : null;
        } else if(navStatus === 'completed') {
            data =  completed ? completed.filter(complete => complete.column === country) : null;
        } else if(navStatus === 'live') {
            data = newsData
        }
        return data
    }
    
    render () {
        const countries = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 
                        'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 
                        'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 
                        'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 
                        'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

        const options = countries.map(country => {
            return <option value ={country} key={country}>{country}</option>
        })
        
        const { nav } = this.props;

        return (
            <section className="card-area">
                <div className="column">
                    <select name="firstCountry" onChange={this.updateCountry}>
                        <option selected="selected"> Select First Country </option>
                        {options}
                    </select>
                    <CardContainer column={0} newsData={ nav ? this.checkNavData(nav, 0) : this.state.firstCountryData}/>
                </div>
                <div className="column">
                    <select name="secondCountry" onChange={this.updateCountry}>
                        <option selected="selected"> Select Second Country </option>
                        {options}
                    </select>
                    <CardContainer column={1} newsData={ nav ? this.checkNavData(nav, 1) : this.state.secondCountryData} />
                </div>
                <div className="column">
                    <select name="thirdCountry" onChange={this.updateCountry}>
                        <option selected="selected"> Select Third Country </option>
                        {options}
                    </select>
                    <CardContainer column={2} newsData={ nav ? this.checkNavData(nav, 2) : this.state.thirdCountryData}/>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </section>
        )
    }
}

export const mapStateToProps = state => ({
    countryOptions: state.countryReducer,
    nav: state.navReducer,
    favorites: state.favoriteReducer,
    completed: state.readReducer,
    newsData : state.newsDataReducer
})

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
        chooseCountry,
        setNewsData
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);