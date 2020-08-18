import Head from 'next';

export default function Pep() {
    return (
        <div className="divPep divForm">
            <form>
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>PEP Declaration</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                        <div className="select-placeholder">Have you worked in a government agency or institution?</div>
                        <select autoComplete="off" className="select2 government" defaultValue="default">
                            <option value="default" disabled>Have you worked in a government agency or
                            institution?
                            </option>
                        </select>
                        </div>
                        <div className="selectdiv">
                        <div className="select-placeholder">Do you have any relative who is/was an elected/appoi...</div>
                        <select autoComplete="off" className="select2 relative" defaultValue="default">
                            <option value="default" disabled>Do you have any relative who is/was
                            an elected/appointed a
                            government official up to second degree
                            of
                            consanguinity or affinity?
                            </option>
                        </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}