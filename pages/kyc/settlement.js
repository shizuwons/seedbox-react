import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { compareStrings } from '../../functions/functions';

function Settlement() {
    const [bank, setBank] = useState([]);
    useEffect(() => {
        async function loadData() {
            const banksDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/banks');
            const banks = await banksDataLoad.data;

            banks.sort(function(a, b) {
                return compareStrings(a.bank_name, b.bank_name);
            });
            
            setBank(banks);

        }

        loadData();
    }, []);
    return (
        <div className="divSettlement divForm" style={{display: 'none'}}>
            <form>
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Settlement
                    Information</p>
                </div>
                <div className="col-lg-12">
                    <div className="selectdiv" style={{margin: '0 0 1em'}}>
                    <div className="select-placeholder">Bank Name</div>
                    <select autoComplete="off" className="select2 bank-name" id="BankName" defaultValue="default">
                        <option value="default" disabled>Bank Name</option>
                        {bank.map((e, index) =>(
                            <option key={index} value={e.bank_name}>{e.bank_name}</option>
                        ))}
                    </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <input required type="text" className="txtusername txtAccountname account-name" />
                    <label alt="Account Name" placeholder="Account Name" />
                </div>
                <div className="col-lg-12 ">
                    <input required type="text" className="txtusername account-number" />
                    <label alt="Account Number" placeholder="Account Number" />
                </div>
                </div>
                <div className="row" style={{marginTop: '20px'}}>
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

export default Settlement;