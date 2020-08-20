import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { compareStrings, sortById, sortIncome } from '../../functions/functions';

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
            const countries = await countryDataLoad.data;
            const lookups = lookupDataLoad.data;
            
            // Countries
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
            const networth = lookups.filter(el => el.category === 'NET_WORTH');
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

            const networthIndex = networth.findIndex(x => x.code === 119);
            const less = (networth[networthIndex]);
            if (networthIndex !== undefined) {
                networth.splice(networthIndex, 1);
                networth.unshift(less);
            }

            income.sort(function(a, b) {
                return sortIncome(a.code, b.code);
            });

            setWork(work);
            setBusiness(business);
            setFunds(funds);
            setNetworth(networth);
            setIncome(income);

            reloadSelect();

        }

        async function getProvinces(id) {
            const provinceDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/provinces/' + id);
            const province = await provinceDataLoad.data;
            $('.workregion').empty();
            let defaultValue = {
                ids: '',
                name: 'Province/Region'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.workregion').append(defaultOption).trigger('change');

            $('.workregion option:selected').prop('disabled', true);

            Object.keys(province).forEach(function(key) {

                let value = province[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                let newOption = new Option(data.name, data.ids, false, false);
                $('.workregion').append(newOption);
                // ...
            });

            reloadProvince();
        }

        async function getCities(id) {
            const cityDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/cities/' + id);
            const city = await cityDataLoad.data;
            $('.workcity').empty();
            let defaultValue = {
                ids: '',
                name: 'City'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.workcity').append(defaultOption).trigger('change');

            $('.workcity option:selected').prop('disabled', true);

            Object.keys(city).forEach(function(key) {
                let value = city[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                let newOption = new Option(data.name, data.ids, false, false);
                $('.workcity').append(newOption);
                // ...
            });

            reloadCity();
        }

        function reloadSelect() {
            $(document).ready(function() {
                if(localStorage.getItem("workCountry") !== "" || localStorage.getItem("workCountry") !== null) {
                    $("select[name='workCountry']").val(localStorage.getItem("workCountry")).trigger('change');
                    $("select[name='workCountry']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='workCountry']").siblings(".select-placeholder").css({ opacity: "1" });    
                }
    
                if(localStorage.getItem("natureOfWork") !== "" || localStorage.getItem("natureOfWork") !== null) {
                    $("select[name='natureOfWork']").val(localStorage.getItem("natureOfWork")).trigger('change');
                    $("select[name='natureOfWork']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='natureOfWork']").siblings(".select-placeholder").css({ opacity: "1" });    
                }      

                if(localStorage.getItem("natureOfBusiness") !== "" || localStorage.getItem("natureOfBusiness") !== null) {
                    $("select[name='natureOfBusiness']").val(localStorage.getItem("natureOfBusiness")).trigger('change');
                    $("select[name='natureOfBusiness']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='natureOfBusiness']").siblings(".select-placeholder").css({ opacity: "1" });    
                }   

                if(localStorage.getItem("sourceOfFunds") !== "" || localStorage.getItem("sourceOfFunds") !== null) {
                    $("select[name='sourceOfFunds']").val(localStorage.getItem("sourceOfFunds")).trigger('change');
                    $("select[name='sourceOfFunds']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='sourceOfFunds']").siblings(".select-placeholder").css({ opacity: "1" });    
                } 

                if(localStorage.getItem("netWorth") !== "" || localStorage.getItem("netWorth") !== null) {
                    $("select[name='netWorth']").val(localStorage.getItem("netWorth")).trigger('change');
                    $("select[name='netWorth']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='netWorth']").siblings(".select-placeholder").css({ opacity: "1" });    
                } 

                if(localStorage.getItem("annualGrossIncome") !== "" || localStorage.getItem("annualGrossIncome") !== null) {
                    $("select[name='annualGrossIncome']").val(localStorage.getItem("annualGrossIncome")).trigger('change');
                    $("select[name='annualGrossIncome']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='annualGrossIncome']").siblings(".select-placeholder").css({ opacity: "1" });    
                } 
            });
        }

        function reloadProvince() {
            $(document).ready(function() {
                if(localStorage.getItem("workRegion") !== "" || localStorage.getItem("workRegion") !== null) {
                    $("select[name='workRegion']").val(localStorage.getItem("workRegion")).trigger('change');
                    $("select[name='workRegion']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='workRegion']").siblings(".select-placeholder").css({ opacity: "1" });    
                }    
            });
        }

        function reloadCity() {
            $(document).ready(function() {
                if(localStorage.getItem("workCity") !== "" || localStorage.getItem("workCity") !== null) {
                    $("select[name='workCity']").val(localStorage.getItem("workCity")).trigger('change');
                    $("select[name='workCity']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='workCity']").siblings(".select-placeholder").css({ opacity: "1" });    
                }    
            });
        }

        loadData();

        if(localStorage.getItem("businessName") !== "" || localStorage.getItem("businessName") !== null) {
            $("input[name='businessName']").val(localStorage.getItem("businessName"));
            $("input[name='businessName']").css({ borderColor: "green"});
        }

        if(localStorage.getItem("workAddress") !== "" || localStorage.getItem("workAddress") !== null) {
            $("input[name='workAddress']").val(localStorage.getItem("agentCode"));
            $("input[name='workAddress']").css({ borderColor: "green"});
        }

        $(document).ready(function() {
            console.log(localStorage.getItem("dos"));
            if(localStorage.getItem("dos") !== null) {
                $("select[name='dos']").val(localStorage.getItem("dos")).trigger('change');
                $("select[name='dos']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='dos']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }
        });

        $('.nature-country').on("change", function(e) { 
            let id = $('.nature-country option:selected').val();

            if(id !== '') {
                getProvinces(id);
            }
         });

         $('.workregion').on("change", function(e) {
             let id = ($('.workregion option:selected').val())

             if(id !== '') {
                getCities(id);
             }
         });
    }, []);
    return (
        <div className="divAdrress1 divForm">
            <form className="professionalForm">
                <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginTop: '10px'}}>Professional Details</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{marginTop: '10px'}}>
                            <div className="select-placeholder">Nature of Work</div>
                            <select autoComplete="off" className="select2 nature-work" name="natureOfWork" defaultValue="default">
                                <option value="default" disabled>Nature of Work</option>
                                {work.map((e, index) =>(
                                    <option key={index} value={e.value}>{e.value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                        <div className="select-placeholder">Nature of Business/Employer</div>
                        <select autoComplete="off" className="select2 nature-business" name="natureOfBusiness" defaultValue="default">
                            <option value="default" disabled>Nature of Business/Employer</option>
                            {business.map((e, index) =>(
                                <option key={index} value={e.value}>{e.value}</option>
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
                            <option value="default" disabled>Are you a Director/Officer/Shareholder?
                            </option>
                            <option>Yes</option>
                            <option>No</option>
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
                            <option value="">Country</option>
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
                            <option value="" disabled>Province/Region</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">City</div>
                        <select autoComplete="off" className="select2 workcity" id="#workcity" name="workCity" defaultValue={''}>
                            <option value="" disabled>City</option>
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
                            <option value="" disabled>Source of Funds</option>
                            {funds.map((e, index) =>(
                                <option key={index} value={e.value}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '0px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Net Worth</div>
                        <select autoComplete="off" className="select2 net-worth" name="netWorth" defaultValue="default">
                            <option value="default" disabled> Net Worth
                            </option>
                            {networth.map((e, index) =>(
                                <option key={index} value={e.value}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="selectdiv">
                        <div className="select-placeholder">Annual Gross Income</div>
                        <select autoComplete="off" className="select2 gross-income" name="annualGrossIncome" defaultValue="default">
                            <option value="default" disabled> Annual Gross Income
                            </option>
                            {income.map((e, index) =>(
                                <option key={index} value={e.value}>{e.value}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}