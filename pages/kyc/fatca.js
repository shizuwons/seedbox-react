import Head from 'next/head';
import { useEffect } from 'react';
import { prefillFatca } from '../../functions/prefillForm';

function Fatca() {
    useEffect(() => {
        $(".checkOther").click();
        
        prefillFatca();
    }, []);
    return (
        <div className="divFatca divForm" style={{display: 'none'}}>
            <form className="fatcaForm">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <p className="pInfoTitle" style={{marginTop: '0px'}}>FATCA</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                    <label className="lblYes">No</label>
                    <label className="lblYes">Yes</label>
                </div>
                </div>
                <div className="row" style={{padding: '10px 10px 10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">Are you a US citizen?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSCitizen"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USCitizen"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">US resident?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSResident"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USResident"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">US resident alien?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSResidentAlien"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USResidentAlien"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">Do you have a current US telephone number?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSTelephone"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USTelephone"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">Were you born in the US?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSBorn"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USBorn"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">Do you have a current US residence address?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSAddress"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USAddress"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry">Do you have a current US mailing address? (Including US P.O.)</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSMailing"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USMailing"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry pClamp pClamp1 text">Have you issued a standing instruction to transfer
                    funds to an
                    account maintained in the US?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notTransferFunds"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="TransferFunds"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry pClamp text">Have you issued a power of Attorney or granted signatory
                    authority to
                    a person with US address?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSPowerOfAttorney"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USPowerOfAttorney"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{padding: '0px 10px 10px', marginTop: '-10px'}}>
                <div className="col-lg-8">
                    <p className="pExpiry pClamp text">Do you have “in care of” address or
                    “hold
                    mail” address that is the sole address for an account (whether such
                    address
                    in the US or outside the US)?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" name="notUSCareOfAddress"/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" name="USCareOfAddress"/>
                    <svg viewBox="0 0 21 21" style={{marginLeft: '20px'}}>
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>Yes</span>
                    </label>
                </div>
                </div>
                <div className="row" style={{marginTop: 10}}>
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

export default Fatca;