import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { compareStrings } from '../../functions/functions';

export default function Settlement() {
    const [bank, setBank] = useState([]);
    useEffect(() => {
        async function loadData() {
            const banksDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/banks');
            const banks = await banksDataLoad.data;

            banks.sort(function(a, b) {
                return compareStrings(a.bank_name, b.bank_name);
            });
            
            setBank(banks);
            reloadSelect();

        }

        function reloadSelect() {
            $(document).ready(function() {
                if(localStorage.getItem("bankName") !== null) {
                    $("select[name='bankName']").val(localStorage.getItem("bankName")).trigger('change.select2');
                    $("select[name='bankName']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                    $("select[name='bankName']").siblings(".select-placeholder").css({ opacity: "1" });    
                }
            });
        }

        if(localStorage.getItem("accountName") !== null) {
            $("input[name='accountName']").val(localStorage.getItem("accountName"));
            $("input[name='accountName']").css({ borderColor: "green"});
        }

        if(localStorage.getItem("accountNumber") !== null) {
            $("input[name='accountNumber']").val(localStorage.getItem("accountNumber"));
            $("input[name='accountNumber']").css({ borderColor: "green"});
        }

        loadData();
    }, []);
    return (
        <div className="divSettlement divForm" style={{ marginTop: "30px"}}>
            <form className="settlementForm">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px', fontSize: '1.5em'}}>Settlement
                        Information</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{margin: '0 0 1em'}}>
                        <div className="select-placeholder">Bank Name</div>
                        <select autoComplete="off" className="select2 bank-name" id="BankName" name="bankName" defaultValue="default">
                            <option value="default" title="Please fill out this field." disabled>Bank Name</option>
                            {bank.map((e, index) =>(
                                <option key={index} value={e.bank_name}>{e.bank_name}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <input required type="text" className="txtusername txtAccountname account-name" name="accountName" />
                        <label alt="Account Name" placeholder="Account Name" />
                    </div>
                    <div className="col-lg-12 ">
                        <input required type="text" className="txtusername account-number" name="accountNumber" />
                        <label alt="Account Number" placeholder="Account Number" />
                    </div>
                </div>
            </form>
        </div>
    );
}