import Head from 'next';

export default function Personal() {
    return (
        <div className="divInfo divForm">
            <form className="personalForm">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginBottom: '15px', fontSize: '1.5em'}}>Personal Info</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input required type="text" className="txtusername lastname" name="lastName" style={{marginTop: '-10px'}} />
                        <label alt="Last Name" placeholder="Last Name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <input required type="text" className="txtusername firstname" style={{marginTop: '-10px'}} />
                        <label alt="First Name, Jr/Sr" placeholder="First Name, Jr/Sr" />
                    </div>
                    <div className="col-lg-12">
                        <input required type="text" className="txtusername maidenname" style={{marginTop: '-10px'}} />
                        <label alt="Mother's Maiden Name" placeholder="Mother's Maiden Name" />
                    </div>
                    <div className="col-lg-6">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                            <div className="select-placeholder">Country Code</div>
                            <select autoComplete="off" className="select2 country-code" defaultValue={0} id="Countrycode">
                                <option value={0} disabled>Country Code
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <input required type="text" className="txtusername mobile" id="Mobile" />
                        <label alt="Mobile Number (ex. 927..)" placeholder="Mobile Number (ex. 927..)" />
                    </div>
                    <div className="col-lg-12">
                        <input required type="text" className="txtusername email"/>
                        <label alt="Email" placeholder="Email" className="labelEmail" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                            <div className="select-placeholder">Civil Status</div>
                            <select autoComplete="off" className="select2 civil-status" defaultValue="default">
                                <option value="default" disabled>Civil Status
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                            <div className="select-placeholder">Gender</div>
                            <select autoComplete="off" className="select2 gender" defaultValue="default">
                                <option value="default" disabled>Gender
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 align-self-center">
                        <p className="pExpiry" style={{marginLeft: '10px'}}>Birthdate</p>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="selectdiv" style={{marginTop: '0px'}}>
                                <div className="select-placeholder">MM</div>
                                <select autoComplete="off" className="select2 month" id="selectMM" defaultValue="default">
                                <option value="default" disabled>MM
                                </option>
                                </select>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="selectdiv" style={{marginTop: '0px'}}>
                                <div className="select-placeholder">DD</div>
                                <select autoComplete="off" className="select2 day" id="selectDD" defaultValue="default">
                                <option value="default" disabled>DD
                                </option>
                                </select>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <div className="selectdiv" style={{marginTop: '0px'}}>
                                <div className="select-placeholder">YYYY</div>
                                <select autoComplete="off" className="select2 year" id="selectYY" defaultValue="default">
                                <option value="default" disabled>YYYY
                                </option>
                                </select>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '5px'}}>
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">Birthplace</div>
                        <select autoComplete="off" className="select2 birthplace" defaultValue="default">
                            <option value="default" disabled>Birthplace</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">Citizenship</div>
                            <select autoComplete="off" className="select2 citizenship" defaultValue="default">
                                <option value="default" disabled>Citizenship</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <input required type="text" className="txtusername tin" id="txtTin" />
                        <label alt="TIN" placeholder="TIN" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <input required type="text" className="txtusername sss-gsis" />
                        <label alt="SSS/GSIS (Optional)" placeholder="SSS/GSIS (Optional)" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <input required type="text" className="txtusername agent-code" />
                        <label alt="Agent Code (Optional)" placeholder="Agent Code (Optional)" />
                    </div>
                </div>
            </form>
        </div>
    );
}