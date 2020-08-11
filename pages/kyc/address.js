import Head from 'next/head';
import axios from 'axios';
import { useState, useEffect } from "react";
import { compareStrings } from '../../functions/functions';
 
function Address() {
    const [country, setCountry] = useState([]);
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

        }

        loadData();
    }, []);

    return (
        <div className="divAdrress divForm" style={{display: 'none'}}>
        <form>
            <div className="row align-items-center">
            <div className="col-lg-12">
                <p className="pInfoTitle">Current Address</p>
            </div>
            <div className="col-lg-12" style={{marginTop: '10px'}}>
                <input required type="text" className="txtusername txtCurrentAdd1 currentaddress" />
                <label alt="Current Address" placeholder="Current Address" />
            </div>
            <div className="col-lg-6" style={{marginTop: '-2px'}}>
                <input required type="text" className="txtusername txtCurrentCity currentcity" />
                <label alt="City" placeholder="City" />
            </div>
            <div className="col-lg-6" style={{marginTop: '-2px'}}>
                <input required type="text" className="txtusername txtCurrentProvince currentprovince" />
                <label alt="Province/Region" placeholder="Province/Region" />
            </div>
            <div className="col-lg-12" style={{marginTop: '-14px'}}>
                <div className="selectdiv">
                <select autoComplete="off" className="select2 current" defaultValue={''}>
                    <option value="" disabled>Country</option>
                    {country.map((e, index) =>(
                        
                        <option key={index} value={e.country_name}>{e.country_name}</option>
                    ))}
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
                <input required type="text" className="txtusername txtAdd txtPermaAdd1 presentaddress" />
                <label className="lblAdd" alt="Permanent Address " placeholder="Address" />
            </div>
            <div className="col-lg-6 colAdd" style={{marginTop: '-4px'}}>
                <input required type="text" className="txtusername txtPermaCity presentcity" />
                <label alt="City" placeholder="City" />
            </div>
            <div className="col-lg-6 colAdd" style={{marginTop: '-4px'}}>
                <input required type="text" className="txtusername txtPermaProvince presentprovince" />
                <label alt="Province/Region" placeholder="Province/Region" />
            </div>
            <div className="col-lg-12 colAdd" style={{marginTop: '-14px'}}>
                <div className="selectdiv">
                <select autoComplete="off" className="select2 present" defaultValue={''}>
                    <option value="" disabled>Country</option>
                    {country.map((e, index) =>(
                        
                        <option key={index} value={e.country_name}>{e.country_name}</option>
                    ))}
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