import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from "react";
import { compareStrings } from '../../functions/functions';
import { prefillAddressInfo, prefillProvince, prefillCity } from '../../functions/prefillForm';
 
function Address() {
    const [country, setCountry] = useState([]);
    const [countryId, setCountryId] = useState([]);
    useEffect(() => {
        async function loadData() {
            const countryDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/countries');
            let countries = await countryDataLoad.data;

            countries = JSON.stringify(countries);
            countries = JSON.parse(countries, (key, value) => Array.isArray(value) ? value.filter(e => e.country_name !== null) : value);
            
            countries.sort(function(a, b) {
                return compareStrings(a.country_name, b.country_name);
            });

            const index = countries.findIndex(x => x.country_name === "Philippines");
            const ph = (countries[index]);
            if (index !== undefined) {
                countries.splice(index, 1);
                countries.unshift(ph);
            }

            setCountry(countries);
            //console.log(country);
        }

        async function getProvinces(id, attribute) {
            const provinceDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/provinces/' + id);
            const province = await provinceDataLoad.data;
            let provinces = [];

            $('.' + attribute + 'region').empty();
            let defaultValue = {
                ids: '',
                name: 'Province/Region'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.' + attribute + 'region').append(defaultOption);

            $('.' + attribute + 'region option:selected').prop('disabled', true);

            Object.keys(province).forEach(function(key) {

                let value = province[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                // let newOption = new Option(data.name, data.ids, false, false);
                // $('.' + attribute + 'region').append(newOption);

                provinces.push(data);
                // ...
            });

            provinces.sort(function(a, b) {
                return compareStrings(a.name, b.name);
            });

            for(let val in provinces) {
                let value = provinces[val];

                let newOption = new Option(value.name, value.ids, false, false);
                $('.' + attribute + 'region').append(newOption);
            }

            if(attribute === 'current') {
                prefillProvince('current');
            } else {
                prefillProvince('present');
            }
        }

        async function getCities(id, attribute) {
            const cityDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/cities/' + id);
            const city = await cityDataLoad.data;
            let cities = [];

            $('.' + attribute + 'city').empty();
            let defaultValue = {
                ids: '',
                name: 'City'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.' + attribute + 'city').append(defaultOption);

            $('.' + attribute + 'city option:selected').prop('disabled', true);

            Object.keys(city).forEach(function(key) {
                let value = city[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                cities.push(data);
                // ...
            });

            cities.sort(function(a, b) {
                return compareStrings(a.name, b.name);
            });

            for(let val in cities) {
                let value = cities[val];

                let newOption = new Option(value.name, value.ids, false, false);
                $('.' + attribute + 'city').append(newOption);
            }

            if(attribute === 'current') {
                prefillCity('current');
            } else {
                prefillCity('present');
            }
        }

        loadData();

        $('.current').on("change", function(e) { 
            let id = $('.current option:selected').val();
            let attribute = 'current';
            
            if(id !== '') {
                getProvinces(id, attribute);
            }
         });

         $('.currentregion').on("change", function(e) {
             let id = ($('.currentregion option:selected').val());
             let attribute = 'current';

             if(id !== '') {
                getCities(id, attribute);
             }
         });

         $('.present').on("change", function(e) { 
            if(e.originalEvent === undefined) {
                let id = $('.present option:selected').val();
                let attribute = 'present';
                if(id !== '') {
                    getProvinces(id, attribute);
                }
            }
         });

         $('.presentregion').on("change", function(e) {
             if(e.originalEvent === undefined) {
                let id = ($('.presentregion option:selected').val());
                let attribute = 'present';
   
                if(id !== '') {
                   getCities(id, attribute);
                }
             }
         });

         prefillAddressInfo();
    }, []);

    return (
        <div className="divAdrress divForm" style={{display: 'none'}}>
        <form className="addressForm">
            <div className="row align-items-center">
            <div className="col-lg-12">
                <p className="pInfoTitle">Current Address</p>
            </div>
            <div className="col-lg-12" style={{marginTop: '10px'}}>
                <input required type="text" className="txtusername txtCurrentAdd1 currentaddress" name="currentAddress" />
                <label alt="Current Address" placeholder="Current Address" />
            </div>
            <div className="col-lg-12" style={{marginTop: '-14px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">Country</div>
                <select autoComplete="off" className="select2 current" id="current" name="currentCountry" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>Country</option>
                    {country.map((e, index) =>(
                        <option key={index} value={e.country_id}>{e.country_name}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-6" style={{marginTop: '-2px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">Province/Region</div>
                <select autoComplete="off" className="select2 currentregion" id="#currentregion" name="currentRegion" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>Province/Region</option>
                </select>
                </div>
            </div>
            <div className="col-lg-6" style={{marginTop: '-2px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">City</div>
                <select autoComplete="off" className="select2 currentcity" id="#currentcity" name="currentCity" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>City</option>
                </select>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
                <p className="pInfoTitle" style={{marginTop: '0px', display: 'inline-block'}}>Permanent Address</p>
                <input className="inp-cbx" id="cbx" type="checkbox" style={{visibility: 'hidden'}} />
                <label className="cbx" htmlFor="cbx"><span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg></span><span style={{fontFamily: 'Proxima Regular', color: '#404040', fontSize: '0.9rem'}}>Same
                    as
                    current address</span></label>
            </div>
            </div>
            <div className="row" style={{marginTop: '15px'}}>
            <div className="col-lg-12 colAdd">
                <input required type="text" className="txtusername txtAdd txtPermaAdd1 presentaddress" name="presentAddress" />
                <label className="lblAdd" alt="Permanent Address " placeholder="Permanent Address" />
            </div>
            <div className="col-lg-12 colAdd" style={{marginTop: '-14px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">Country</div>
                <select autoComplete="off" className="select2 present" id="#present" name="presentCountry" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>Country</option>
                    {country.map((e, index) =>(
                        
                        <option key={index} value={e.country_id}>{e.country_name}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">Province/Region</div>
                <select autoComplete="off" className="select2 presentregion" id="#presentregion" name="presentRegion" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>Province/Region</option>
                </select>
                </div>
            </div>
            <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                <div className="selectdiv">
                <div className="select-placeholder">City</div>
                <select autoComplete="off" className="select2 presentcity" id="#presentcity" name="presentCity" defaultValue={''}>
                    <option value="" title="Please fill out this field." disabled>City</option>
                </select>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginTop: '10px'}}>
                <input type="button" className="btnBack" defaultValue="Back" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6" style={{marginTop: '10px'}}>
                <input type="button" className="btnNext btnProceed" defaultValue="Next" />
            </div>
            </div>
        </form>
      </div>
    );
}

export default Address;