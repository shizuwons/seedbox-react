import Head from 'next/head';

function Csa() {
    return (
        <div className="divCsa divForm" style={{display: 'none'}}>
            <form>
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Client
                    Suitability
                    Assessment</p>
                </div>
                <div className="col-lg-12">
                    <div className="selectdiv">
                    <div className="select-placeholder">What is the purpose of your investment?</div>    
                    <select autoComplete="off" className="select2 investment" defaultValue="default">
                        <option value="default" disabled> What is the purpose of your investment?
                        </option>
                        <option>Growth</option>
                        <option>Investment</option>
                        <option>Income</option>
                        <option>Portfolio</option>
                        <option>Speculation</option>
                        <option>Savings</option>
                        <option>Others</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How long are you investing for?</div>
                    <select autoComplete="off" className="select2 investing" defaultValue="default">
                        <option value="default" disabled> How long are you investing for?</option>
                        <option>Up to two years</option>
                        <option>3-5 Years</option>
                        <option>5-7 Years</option>
                        <option>7 years and up</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">For this investment, you are?</div>
                    <select autoComplete="off" className="select2 for-investment" defaultValue="default">
                        <option value="default" disabled> For this investment, you are?
                        </option>
                        <option>"Willing to accept low to no risk for general stability ofyour
                        money"
                        </option>
                        <option>"Willing to accept moderate risk in return for some growth
                        opportunity"
                        </option>
                        <option>"Willing to accept high risk for potentially higher return"</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How knowledgeable are you as an investor?</div>
                    <select autoComplete="off" className="select2 investor" defaultValue="default">
                        <option value="default" disabled> How knowledgeable are you as an
                        investor?
                        </option>
                        <option>I am a new or novice investor</option>
                        <option>I have some knowledge about investing</option>
                        <option>I am generally knowledgeable about investing</option>
                        <option>I am very knowledgeable about investing</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">Which of the following have you invested in?</div>
                    <select autoComplete="off" className="select2 invested" defaultValue="default">
                        <option value="default" disabled> Which of the following have you invested
                        in?
                        </option>
                        <option>Cash and deposit products (e.g. time deposit, SDA)</option>
                        <option>Government securities or corporate fixed-income securities</option>
                        <option>Stocks</option>
                        <option>Mutual funds or UITFs</option>
                        <option>Insurance products (including variable unit linked products and
                        pre-need)</option>
                        <option>Offshore funds (including ETFs, REITs)</option>
                        <option>Structured financial products</option>
                        <option>Commodities</option>
                        <option>Real estate</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">Do you have regular liquidity?</div>
                    <select autoComplete="off" className="select2 liquidity" defaultValue="default">
                        <option value="default" disabled> Do you have regular liquidity
                        requirement?
                        </option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How much drop/loss in the value of your investment can...</div>
                    <select autoComplete="off" className="select2 droploss" defaultValue="default">
                        <option value="default" disabled> How much drop/loss 
                        in the value of your investment can you accept?
                        </option>
                        <option>0%</option>
                        <option>Up to 10%</option>
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

export default Csa;