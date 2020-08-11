import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { compareStrings, sortById, sortIncome } from '../../functions/functions';

function Professional() {
    const [country, setCountry] = useState([]);
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

        }

        loadData();
    }, []);
    return (
        <div className="divAdrress1 divForm" style={{display: 'none'}}>
            <form>
            <div className="row" style={{marginTop: '-10px'}}>
            <div className="col-lg-12">
                <p className="pInfoTitle" style={{marginTop: '10px'}}>Professional Details</p>
            </div>
            <div className="col-lg-12">
                <div className="selectdiv" style={{marginTop: '10px'}}>
                <select autoComplete="off" className="select2 nature-work" defaultValue="default">
                    <option value="default" disabled>Nature of Work</option>
                    {work.map((e, index) =>(
                        <option key={index} value={e.value}>{e.value}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="selectdiv">
                <select autoComplete="off" className="select2 nature-business" defaultValue="default">
                    <option value="default" disabled>Nature of Business/Employer</option>
                    {business.map((e, index) =>(
                        <option key={index} value={e.value}>{e.value}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-12" style={{marginTop: '10px'}}>
            <input required type="text" className="txtusername naturebusinessname" />
            <label alt="Business/Employer Name" placeholder="Business/Employer Name" />
            </div>
            <div className="col-lg-12">
                <input required type="text" className="txtusername workaddress" />
                <label alt="Office Address" placeholder="Office Address" />
            </div>
            <div className="col-lg-6" style={{marginTop: '-4px'}}>
                <input required type="text" className="txtusername workcity" />
                <label alt="City" placeholder="City" />
            </div>
            <div className="col-lg-6" style={{marginTop: '-4px'}}>
                <input required type="text" className="txtusername workprovince" />
                <label alt="Province/Region" placeholder="Province/Region" />
            </div>
            <div className="col-lg-12" style={{marginTop: '-10px'}}>
                <div className="selectdiv">
                <select autoComplete="off" className="select2 nature-country" defaultValue={''}>
                    <option value="">Country</option>
                    {country.map((e, index) =>(
                        <option key={index} value={e.country_name}>{e.country_name}</option>
                    ))}
                </select>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12">
                <p className="pInfoTitle" style={{marginTop: '0px'}}>Financial Profile</p>
            </div>
            <div className="col-lg-12" style={{marginTop: '10px'}}>
                <div className="selectdiv" style={{marginTop: '10px'}}>
                <select autoComplete="off" className="select2 source-funds" defaultValue="default">
                    <option value="default" disabled>Source of Funds</option>
                    {funds.map((e, index) =>(
                        <option key={index} value={e.value}>{e.value}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-6" style={{marginTop: '0px'}}>
                <div className="selectdiv">
                <select autoComplete="off" className="select2 net-worth" defaultValue="default">
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
                <select autoComplete="off" className="select2 gross-income" defaultValue="default">
                    <option value="default" disabled> Annual Gross Income
                    </option>
                    {income.map((e, index) =>(
                        <option key={index} value={e.value}>{e.value}</option>
                    ))}
                </select>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="selectdiv" style={{marginTop: '8px'}}>
                <select autoComplete="off" className="select2 dos" defaultValue="default">
                    <option value="default" disabled>Are you Director/Officer/Shareholder?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <input type="button" className="btnBack" defaultValue="Back" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <input type="button" className="btnNext btnProceed" defaultValue="Next" />
            </div>
            </div>
        </form>
      </div>
    );
}

export default Professional;