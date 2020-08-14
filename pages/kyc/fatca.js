import Head from 'next/head';

function Fatca() {
    return (
        <div className="divFatca divForm" style={{display: 'none'}}>
            <form>
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
                    <p className="pExpiry">Are you a US Citizen?</p>
                </div>
                <div className="col-lg-4">
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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
                    <input type="checkbox" className="checkOther" />
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6" />
                    </svg>
                    <span>No</span>
                    </label>
                    <label className="checkbox bounce">
                    <input type="checkbox" className="checkNo" />
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