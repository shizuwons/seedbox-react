import Head from 'next';

export default function Csa() {
    return (
        <div className="divCsa divForm">
            <form>
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Client
                        Suitability
                        Assessment</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                            <div className="select-placeholder">How much do you see yourself investing?</div>    
                            <select autoComplete="off" className="select2 invest-much" defaultValue="default">
                                <option value="default" disabled> How much do you see yourself investing?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How frequently do you see yourself investing?</div>    
                            <select autoComplete="off" className="select2 frequent-invest" defaultValue="default">
                                <option value="default" disabled> How frequently do you see yourself investing?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">What is the purpose of your investment?</div>    
                            <select autoComplete="off" className="select2 investment" defaultValue="default">
                                <option value="default" disabled> What is the purpose of your investment?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How long are you investing for?</div>
                            <select autoComplete="off" className="select2 investing" defaultValue="default">
                                <option value="default" disabled> How long are you investing for?</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">For this investment, you are?</div>
                            <select autoComplete="off" className="select2 for-investment" defaultValue="default">
                                <option value="default" disabled> For this investment, you are?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How knowledgeable are you as an investor?</div>
                            <select autoComplete="off" className="select2 investor" defaultValue="default">
                                <option value="default" disabled> How knowledgeable are you as an
                                investor?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">Which of the following have you invested in?</div>
                            <select autoComplete="off" className="select2 invested" defaultValue="default">
                                <option value="default" disabled> Which of the following have you invested
                                in?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">Do you have regular liquidity?</div>
                            <select autoComplete="off" className="select2 liquidity" defaultValue="default">
                                <option value="default" disabled> Do you have a regular liquidity
                                requirement?
                                </option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How much drop/loss in the value of your investment can...</div>
                            <select autoComplete="off" className="select2 droploss" defaultValue="default">
                                <option value="default" disabled> How much drop/loss 
                                in the value of your investment can you accept?
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}