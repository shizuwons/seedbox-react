import Head from 'next/head';

function Pep() {
    return (
        <div className="divPep divForm" style={{display: 'none'}}>
            <form>
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>PEP Declaration
                    </p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div className="selectdiv">
                    <select autoComplete="off" className="select2 government" defaultValue="default">
                        <option value="default" disabled>Have you worked in a government agency or
                        institution?
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <select autoComplete="off" className="select2 relative" defaultValue="default">
                        <option value="default" disabled>Do you have any relative who is/was
                        elected a
                        government official or is/was an appointed official up to second degree
                        of
                        consanguinity or affinity?
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    </div>
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

export default Pep;