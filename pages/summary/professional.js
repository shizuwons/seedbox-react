import Head from 'next';

export default function Professional() {
    return (
        <div className="divAdrress1 divForm">
            <form>
                <div className="row" style={{marginTop: '-10px'}}>
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginTop: '10px'}}>Professional Details</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{marginTop: '10px'}}>
                            <div className="select-placeholder">Nature of Work</div>
                            <select autoComplete="off" className="select2 nature-work" defaultValue="default">
                                <option value="default" disabled>Nature of Work</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                        <div className="select-placeholder">Nature of Business/Employer</div>
                        <select autoComplete="off" className="select2 nature-business" defaultValue="default">
                            <option value="default" disabled>Nature of Business/Employer</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <input required type="text" className="txtusername naturebusinessname" />
                        <label alt="Business/Employer Name" placeholder="Business/Employer Name" />
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv" style={{marginTop: '-8px'}}>
                        <div className="select-placeholder">Are you a Director/Officer/Shareholder?</div>
                        <select autoComplete="off" className="select2 dos" defaultValue="default">
                            <option value="default" disabled>Are you a Director/Officer/Shareholder?
                            </option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '3px'}}>
                       <input required type="text" className="txtusername workaddress" />
                        <label alt="Office Address" placeholder="Office Address" />
                    </div>
                    <div className="col-lg-12" style={{marginTop: '-16px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Country</div>
                        <select autoComplete="off" className="select2 nature-country" defaultValue={''}>
                            <option value="">Country</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Province/Region</div>
                        <select autoComplete="off" className="select2 workregion" id="#workregion" defaultValue={''}>
                            <option value="" disabled>Province/Region</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">City</div>
                        <select autoComplete="off" className="select2 workcity" id="#workcity" defaultValue={''}>
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
                        <select autoComplete="off" className="select2 source-funds" defaultValue="default">
                            <option value="default" disabled>Source of Funds</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '0px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Net Worth</div>
                        <select autoComplete="off" className="select2 net-worth" defaultValue="default">
                            <option value="default" disabled> Net Worth
                            </option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="selectdiv">
                        <div className="select-placeholder">Annual Gross Income</div>
                        <select autoComplete="off" className="select2 gross-income" defaultValue="default">
                            <option value="default" disabled> Annual Gross Income
                            </option>
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}