import Head from 'next';

export default function Upload() {
    return (
        <div className="divUpload divForm">
            <form>
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Upload Documents</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                            <div className="select-placeholder">ID Type</div>
                            <select autoComplete="off" className="select2 idtype" id="IdType" defaultValue="default">
                                <option value="default" disabled>ID Type</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                        <input required type="text" className="txtusername id-number" id="txtIdNumber" />
                        <label alt="ID Number" placeholder="ID Number" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12 align-self-center">
                        <p className="pExpiry">Expiry date</p>
                    </div>
                    <div className=" col-lg-3 col-md-3 col-sm-4 col-4">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">MM</div>
                        <select autoComplete="off" className="select2 expirymonth" defaultValue="default">
                            <option value="default" disabled>MM
                            </option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">DD</div>
                        <select autoComplete="off" className="select2 expiryday" defaultValue="default">
                            <option value="default" disabled>DD
                            </option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-4">
                        <div className="selectdiv" style={{marginTop: '0px'}}>
                        <div className="select-placeholder">YYYY</div>
                            <select autoComplete="off" className="select2 expiryyear" defaultValue="default">
                                <option value="default" disabled>YYYY
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <img src="Image/upload.png" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <img src="Image/signature.png" className="img-fluid" />
                    </div>
                </div>
            </form>
        </div>
    );
}