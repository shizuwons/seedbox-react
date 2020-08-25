import Head from 'next/head';
import { useEffect } from 'react';

export default function Fatca() {
    useEffect(() => {
        $(document).ready(function() {
            if(localStorage.getItem('notUSCitizen') === null) {
                $("input[name='USCitizen']").attr('checked', true);
            } else if(localStorage.getItem('USCitizen') === null) {
                $("input[name='notUSCitizen']").attr('checked', true);
            }

            if(localStorage.getItem('notUSCitizen') === null && localStorage.getItem('USCitizen') === null) {
                $("input[name='USCitizen']").attr('checked', false);
                $("input[name='notUSCitizen']").attr('checked', false);
            }

            if(localStorage.getItem('notUSResident') === null) {
                $("input[name='USResident']").attr('checked', true);
            } else if(localStorage.getItem('USResident') === null) {
                $("input[name='notUSResident']").attr('checked', true);
            }

            if(localStorage.getItem('USResident') === null && localStorage.getItem('notUSResident') === null) {
                $("input[name='USResident']").attr('checked', false);
                $("input[name='notUSResident']").attr('checked', true);
            }

            if(localStorage.getItem('notUSResidentAlien') === null) {
                $("input[name='USResidentAlien']").attr('checked', true);
            } else if(localStorage.getItem('USResidentAlien') === null) {
                $("input[name='notUSResidentAlien']").attr('checked', true);
            }

            if(localStorage.getItem('USResidentAlien') === null && localStorage.getItem('notUSResidentAlien') === null) {
                $("input[name='USResidentAlien']").attr('checked', false);
                $("input[name='notUSResidentAlien']").attr('checked', true);
            }

            if(localStorage.getItem('notUSTelephone') === null) {
                $("input[name='USTelephone']").attr('checked', true);
            } else if(localStorage.getItem('USTelephone') === null) {
                $("input[name='notUSTelephone']").attr('checked', true);
            }

            if(localStorage.getItem('USTelephone') === null && localStorage.getItem('notUSTelephone') === null) {
                $("input[name='USTelephone']").attr('checked', false);
                $("input[name='notUSTelephone']").attr('checked', true);
            }

            if(localStorage.getItem('notUSBorn') === null) {
                $("input[name='USBorn']").attr('checked', true);
            } else if(localStorage.getItem('USBorn') === null) {
                $("input[name='notUSBorn']").attr('checked', true);
            }

            if(localStorage.getItem('USBorn') === null && localStorage.getItem('notUSBorn') === null) {
                $("input[name='USBorn']").attr('checked', false);
                $("input[name='notUSBorn']").attr('checked', true);
            }

            if(localStorage.getItem('notUSAddress') === null) {
                $("input[name='USAddress']").attr('checked', true);
            } else if(localStorage.getItem('USAddress') === null) {
                $("input[name='notUSAddress']").attr('checked', true);
            }

            if(localStorage.getItem('USAddress') === null && localStorage.getItem('notUSAddress') === null) {
                $("input[name='USAddress']").attr('checked', false);
                $("input[name='notUSAddress']").attr('checked', true);
            }

            if(localStorage.getItem('notUSMailing') === null) {
                $("input[name='USMailing']").attr('checked', true);
            } else if(localStorage.getItem('USMailing') === null) {
                $("input[name='notUSMailing']").attr('checked', true);
            }

            if(localStorage.getItem('USMailing') === null && localStorage.getItem('notUSMailing') === null) {
                $("input[name='USMailing']").attr('checked', false);
                $("input[name='notUSMailing']").attr('checked', true);
            }

            if(localStorage.getItem('notTransferFunds') === null) {
                $("input[name='TransferFunds']").attr('checked', true);
            } else if(localStorage.getItem('TransferFunds') === null) {
                $("input[name='notTransferFunds']").attr('checked', true);
            }

            if(localStorage.getItem('TransferFunds') === null && localStorage.getItem('notTransferFunds') === null) {
                $("input[name='TransferFunds']").attr('checked', false);
                $("input[name='notTransferFunds']").attr('checked', true);
            }

            if(localStorage.getItem('notUSPowerOfAttorney') === null) {
                $("input[name='USPowerOfAttorney']").attr('checked', true);
            } else if(localStorage.getItem('USPowerOfAttorney') === null) {
                $("input[name='notUSPowerOfAttorney']").attr('checked', true);
            }

            if(localStorage.getItem('USPowerOfAttorney') === null && localStorage.getItem('notUSPowerOfAttorney') === null) {
                $("input[name='USPowerOfAttorney']").attr('checked', false);
                $("input[name='notUSPowerOfAttorney']").attr('checked', true);
            }

            if(localStorage.getItem('notUSCareOfAddress') === null) {
                $("input[name='USCareOfAddress']").attr('checked', true);
            } else if(localStorage.getItem('USCareOfAddress') === null) {
                $("input[name='notUSCareOfAddress']").attr('checked', true);
            }

            if(localStorage.getItem('USCareOfAddress') === null && localStorage.getItem('notUSCareOfAddress') === null) {
                $("input[name='USCareOfAddress']").attr('checked', false);
                $("input[name='notUSCareOfAddress']").attr('checked', true);
            }
        });
    }, []);
    return (
        <div className="divFatca divForm" style={{ marginTop: "30px"}}>
            <form className="fatcaForm">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <p className="pInfoTitle" style={{marginTop: '0px', fontSize: '1.5em'}}>FATCA</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                        <label className="lblYes">No</label>
                        <label className="lblYes">Yes</label>
                    </div>
                    </div>
                    <div className="row" style={{padding: '10px 10px 10px'}}>
                    <div className="col-lg-8">
                        <p className="pExpiry">Are you a US Citizen?</p>
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
                        <p className="pExpiry">US Resident?</p>
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
                        <input type="checkbox" className="checkOther" name="notUSTelephone" />
                        <svg viewBox="0 0 21 21">
                            <polyline points="5 10.75 8.5 14.25 16 6" />
                        </svg>
                        <span>No</span>
                        </label>
                        <label className="checkbox bounce">
                        <input type="checkbox" className="checkNo" name="USTelephone" />
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
                        <p className="pExpiry">Have you issued a standing instruction to transfer
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
                        <p className="pExpiry">Have you issued a power of Attorney or granted signatory
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
                        <p className="pExpiry">Do you have “in care of” address or
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
            </form>
        </div>
    );
}