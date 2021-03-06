import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { compareStrings, sortById, sortIncome, arrangeValues } from '../../functions/functions';
import { prefillProvince, prefillCity, prefillProfessionalDetails } from '../../functions/prefillForm';

export default function Professional() {
    const [country, setCountry] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [work, setWork] = useState([]);
    const [business, setBusiness] = useState([]);
    const [funds, setFunds] = useState([]);
    const [networth, setNetworth] = useState([]);
    const [income, setIncome] = useState([]);
    useEffect(() => {
        async function loadData() {
            const countryDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/countries');
            const lookupDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/lookups');
            let countries = await countryDataLoad.data;
            const lookups = lookupDataLoad.data;
            
            // Countries
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

            // Lookups
            const work = lookups.filter(el => el.category === 'OCCUPATION');
            const business = lookups.filter(el => el.category === 'NATURE_OF_BUSINESS');
            const funds = lookups.filter(el => el.category === 'SOURCE_OF_INCOME');
            let networth = lookups.filter(el => el.category === 'NET_WORTH');
            const income = lookups.filter(el => el.category === 'ANNUAL_INCOME');

            work.sort(function(a, b) {
                return sortById(a.code, b.code);
            });

            const fundIndex = funds.findIndex(x => x.code === "OTH");
            const others = (funds[fundIndex]);
            if (fundIndex !== undefined) {
                funds.splice(fundIndex, 1);
                funds.push(others);
            }

            // let code = 604;
            // const networthIndex = networth.findIndex(x => x.code === code);
            // const less = (networth[networthIndex]);
            // if (networthIndex !== undefined) {
            //     networth.splice(networthIndex, 1);
            //     networth.unshift(less);
            // }
            networth = arrangeValues(networth, 68);
            networth = arrangeValues(networth, 67);
            networth = arrangeValues(networth, 66);
            networth = arrangeValues(networth, 604);

            income.sort(function(a, b) {
                return sortIncome(a.code, b.code);
            });

            setWork(work);
            setBusiness(business);
            setFunds(funds);
            setNetworth(networth);
            setIncome(income);

            prefillProfessionalDetails();

        }

        async function getProvinces(id) {
            const provinceDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/provinces/' + id);
            const province = await provinceDataLoad.data;
            let provinces = [];
            $('.workregion').empty();
            let defaultValue = {
                ids: '',
                name: 'Province/Region'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.workregion').append(defaultOption);

            $('.workregion option:selected').prop('disabled', true);

            Object.keys(province).forEach(function(key) {

                let value = province[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                provinces.push(data);
                // ...
            });

            provinces.sort(function(a, b) {
                return compareStrings(a.name, b.name);
            });

            for(let val in provinces) {
                let value = provinces[val];

                let newOption = new Option(value.name, value.ids, false, false);
                $('.workregion').append(newOption);
            }

            prefillProvince('work');
        }

        async function getCities(id) {
            const cityDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/cities/' + id);
            const city = await cityDataLoad.data;
            let cities = [];

            $('.workcity').empty();
            let defaultValue = {
                ids: '',
                name: 'City'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.workcity').append(defaultOption);

            $('.workcity option:selected').prop('disabled', true);

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
                $('.workcity').append(newOption);
            }

            prefillCity('work');
        }

        loadData();

        $(document).ready(function() {
            $('.nature-country').on("change", function(e) { 
                if(e.originalEvent === undefined) {
                    let id = $('.nature-country option:selected').val();
                    if(id !== '') {
                        getProvinces(id);
                    }
                }
             });
    
             $('.workregion').on("change", function(e) {
                 if(e.originalEvent === undefined) {
                    let id = ($('.workregion option:selected').val());
       
                    if(id !== '') {
                       getCities(id);
                    }
                 }
             });
        });
    }, []);
    return (
        <div className="divAdrress1 divForm" style={{ marginTop: "30px"}}>
            <form className="professionalForm">
                <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-12">
                        <p className="pInfoTitle" id="professionalStepScroll" style={{marginTop: '10px', fontSize: '1.5em'}}>Professional Details</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{marginTop: '10px'}}>
                            <div className="select-placeholder">Nature of Work</div>
                            <select autoComplete="off" className="select2 nature-work" name="natureOfWork" defaultValue="default">
                                <option value="default" title="Please fill out this field." disabled>Nature of Work</option>
                                {work.map((e, index) =>(
                                    <option key={index} value={e.code}>{e.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                        <div className="select-placeholder">Nature of Business/Employer</div>
                        <select autoComplete="off" className="select2 nature-business" name="natureOfBusiness" defaultValue="default">
                            <option value="default" title="Please fill out this field." disabled>Nature of Business/Employer</option>
                            {business.map((e, index) =>(
                                <option key={index} value={e.code}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <input required type="text" className="txtusername naturebusinessname" name="businessName"/>
                        <label alt="Business/Employer Name" placeholder="Business/Employer Name" />
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{marginTop: '-8px'}}>
                        <div className="select-placeholder">Are you a Director/Officer/Shareholder?</div>
                        <select autoComplete="off" className="select2 dos" name="dos" defaultValue="default">
                            <option value="default" title="Please fill out this field." disabled>Are you a Director/Officer/Shareholder?
                            </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '3px'}}>
                       <input required type="text" className="txtusername workaddress" name="workAddress"/>
                        <label alt="Office Address" placeholder="Office Address" />
                    </div>
                    <div className="col-lg-12" style={{marginTop: '-16px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Country</div>
                        <select autoComplete="off" className="select2 nature-country" name="workCountry" defaultValue={''}>
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
                        <select autoComplete="off" className="select2 workregion" id="#workregion" name="workRegion" defaultValue={''}>
                            <option value="" title="Please fill out this field." disabled>Province/Region</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">City</div>
                        <select autoComplete="off" className="select2 workcity" id="#workcity" name="workCity" defaultValue={''}>
                            <option value="" title="Please fill out this field." disabled>City</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginTop: '0px'}}>Financial Profile</p>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <div className="selectdiv" style={{marginTop: '10px'}}>
                        <div className="select-placeholder">Source of Funds</div>
                        <select autoComplete="off" className="select2 source-funds" name="sourceOfFunds" defaultValue="default">
                            <option value="default" disabled>Source of Funds</option>
                            <option value="" title="Please fill out this field." disabled>Source of Funds</option>
                            {funds.map((e, index) =>(
                                <option key={index} value={e.code}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '0px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Net Worth</div>
                        <select autoComplete="off" className="select2 net-worth" name="netWorth" defaultValue="default">
                            <option value="default" title="Please fill out this field." disabled> Net Worth
                            </option>
                            {networth.map((e, index) =>(
                                <option key={index} value={e.code}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="selectdiv">
                        <div className="select-placeholder">Annual Gross Income</div>
                        <select autoComplete="off" className="select2 gross-income" name="annualGrossIncome" defaultValue="default">
                            <option value="default" title="Please fill out this field." disabled> Annual Gross Income
                            </option>
                            {income.map((e, index) =>(
                                <option key={index} value={e.code}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}