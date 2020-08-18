import Head from 'next';

export default function Address() {
    return (
        <div className="divAdrress divForm">
            <form>
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <p className="pInfoTitle">Current Address</p>
                    </div>
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <input required type="text" className="txtusername txtCurrentAdd1 currentaddress" />
                        <label alt="Current Address" placeholder="Current Address" />
                    </div>
                    <div className="col-lg-12" style={{marginTop: '-14px'}}>
                        <div className="selectdiv">
                            <div className="select-placeholder">Country</div>
                            <select autoComplete="off" className="select2 current" id="current" defaultValue={''}>
                                <option value="" disabled>Country</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                            <div className="select-placeholder">Province/Region</div>
                            <select autoComplete="off" className="select2 currentregion" id="#currentregion" defaultValue={''}>
                                <option value="" disabled>Province/Region</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                            <div className="select-placeholder">City</div>
                            <select autoComplete="off" className="select2 currentcity" id="#currentcity" defaultValue={''}>
                                <option value="" disabled>City</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <p className="pInfoTitle" style={{marginTop: '0px', display: 'inline-block'}}>Permanent Address</p>
                    </div>
                    <div className="col-lg-12 colAdd" style={{ marginTop: '15px' }}>
                        <input required type="text" className="txtusername txtAdd txtPermaAdd1 presentaddress" />
                        <label className="lblAdd" alt="Present Address " placeholder="Present Address" />
                    </div>
                    <div className="col-lg-12 colAdd" style={{marginTop: '-14px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Country</div>
                        <select autoComplete="off" className="select2 present" id="#present" defaultValue={''}>
                            <option value="" disabled>Country</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">Province/Region</div>
                        <select autoComplete="off" className="select2 presentregion" id="#presentregion" defaultValue={''}>
                            <option value="" disabled>Province/Region</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-6 colAdd" style={{marginTop: '-2px'}}>
                        <div className="selectdiv">
                        <div className="select-placeholder">City</div>
                        <select autoComplete="off" className="select2 presentcity" id="#presentcity" defaultValue={''}>
                            <option value="" disabled>City</option>
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}