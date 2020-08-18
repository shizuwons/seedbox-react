import Head from 'next';

export default function Settlement() {
    return (
        <div className="divSettlement divForm">
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
            </form>
        </div>
    );
}