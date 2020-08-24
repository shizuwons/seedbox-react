import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from "react";
import { compareStrings } from '../../functions/functions';

export default function Address() {
    const [country, setCountry] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [countryId, setCountryId] = useState([]);
    useEffect(() => {
        async function loadData() {
            const countryDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/countries');
            const countries = await countryDataLoad.data;
            
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

            reloadSelect();
        }

        async function getProvinces(id, attribute) {
            const provinceDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/provinces/' + id);
            const province = await provinceDataLoad.data;
            $('.' + attribute + 'region').empty();
            let defaultValue = {
                ids: '',
                name: 'Province/Region'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.' + attribute + 'region').append(defaultOption).trigger('change');

            $('.' + attribute + 'region option:selected').prop('disabled', true);

            Object.keys(province).forEach(function(key) {

                let value = province[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                let newOption = new Option(data.name, data.ids, false, false);
                $('.' + attribute + 'region').append(newOption);
                // ...
            });

            reloadProvince(attribute);
        }

        async function getCities(id, attribute) {
            const cityDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/cities/' + id);
            const city = await cityDataLoad.data;
            $('.' + attribute + 'city').empty();
            let defaultValue = {
                ids: '',
                name: 'City'
            };

            let defaultOption = new Option(defaultValue.name, defaultValue.ids, false, false);
            $('.' + attribute + 'city').append(defaultOption).trigger('change');

            $('.' + attribute + 'city option:selected').prop('disabled', true);

            Object.keys(city).forEach(function(key) {
                let value = city[key];
                
                let data =  { 
                    ids: key,
                    name: value
                };

                let newOption = new Option(data.name, data.ids, false, false);
                $('.' + attribute + 'city').append(newOption);
                // ...
            });

            reloadCity(attribute);
        }

        function reloadSelect() {
            $(document).ready(function() {
                if(localStorage.getItem("currentCountry") !== null) {
                    $("select[name='currentCountry']").val(localStorage.getItem("currentCountry")).trigger('change');
                    $("select[name='currentCountry']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='currentCountry']").siblings(".select-placeholder").css({ opacity: "1" });    
                }
    
                if(localStorage.getItem("presentCountry") !== null) {
                    $("select[name='presentCountry']").val(localStorage.getItem("presentCountry")).trigger('change');
                    $("select[name='presentCountry']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='presentCountry']").siblings(".select-placeholder").css({ opacity: "1" });    
                }      
            });
        }

        function reloadProvince(attribute) {
            $(document).ready(function() {
                if(attribute === 'current') {
                    if(localStorage.getItem("currentRegion") !== null) {
                        $("select[name='currentRegion']").val(localStorage.getItem("currentRegion")).trigger('change');
                        $("select[name='currentRegion']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                        $("select[name='currentRegion']").siblings(".select-placeholder").css({ opacity: "1" });    
                    }    
                } 
                
                
                if(attribute === 'present') {
                    if(localStorage.getItem("presentRegion") !== null) {
                        $("select[name='presentRegion']").val(localStorage.getItem("presentRegion")).trigger('change');
                        $("select[name='presentRegion']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                        $("select[name='presentRegion']").siblings(".select-placeholder").css({ opacity: "1" });    
                    }    
                }
            });
        }

        function reloadCity(attribute) {
            $(document).ready(function() {
                if(attribute === 'current') {
                    if(localStorage.getItem("currentCity") !== null) {
                        $("select[name='currentCity']").val(localStorage.getItem("currentCity")).trigger('change');
                        $("select[name='currentCity']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                        $("select[name='currentCity']").siblings(".select-placeholder").css({ opacity: "1" });    
                    }    
                } 
                
                console.log(attribute);
                if(attribute === 'present') {
                    if(localStorage.getItem("presentCity") !== null) {
                        $("select[name='presentCity']").val(localStorage.getItem("presentCity")).trigger('change');
                        $("select[name='presentCity']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                        $("select[name='presentCity']").siblings(".select-placeholder").css({ opacity: "1" });    
                    }    
                }  
            });
        }

        loadData();

        if(localStorage.getItem("currentAddress") !== null) {
            $("input[name='currentAddress']").val(localStorage.getItem("currentAddress"));
            $("input[name='currentAddress']").css({ borderColor: "green"});
        }

        if(localStorage.getItem("presentAddress") !== null) {
            $("input[name='presentAddress']").val(localStorage.getItem("presentAddress"));
            $("input[name='presentAddress']").css({ borderColor: "green"});
        }

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
            let id = $('.present option:selected').val();
            let attribute = 'present';

            if(id !== '') {
                getProvinces(id, attribute);
            }
         });

         $('.presentregion').on("change", function(e) {
             let id = ($('.presentregion option:selected').val());
             let attribute = 'present';

             if(id !== '') {
                getCities(id, attribute);
             }
         });
    }, []);

    return (
        <div className="divAdrress divForm" style={{ marginTop: "30px"}}>
            <form className="addressForm">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginBottom: '15px', fontSize: '1.5em'}}>Current Address</p>
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
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginTop: '0px', display: 'inline-block', fontSize: '1.5em'}}>Permanent Address</p>
                    </div>
                    <div className="col-lg-12 colAdd" style={{ marginTop: '15px' }}>
                        <input required type="text" className="txtusername txtAdd txtPermaAdd1 presentaddress" name="presentAddress" />
                        <label className="lblAdd" alt="Present Address " placeholder="Present Address" />
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
            </form>
        </div>
    );
}