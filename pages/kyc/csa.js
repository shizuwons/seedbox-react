import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Csa() {
    const [purposes, setPurpose] = useState([]);
    const [horizons, setHorizon] = useState([]);
    const [principles, setPrinciple] = useState([]);
    const [knowledges, setKnowledge] = useState([]);
    const [others, setOthers] = useState([]);
    const [liquidities, setLiquidities] = useState([]);
    const [risks, setRisk] = useState([]);
    useEffect(() => {
        async function loadData() {
            const lookupDataLoad = await axios.get('https://dev.seedbox.ph/core/lite/v1/lookups');
            const lookups = lookupDataLoad.data;
            
            // Lookups
            const purpose = lookups.filter(el => el.category === 'INVESTMENT_PURPOSE');
            const horizon = lookups.filter(el => el.category === 'INVESTMENT_HORIZON');
            const principle = lookups.filter(el => el.category === 'INVESTMENT_PRINCIPLE');
            const knowledge = lookups.filter(el => el.category === 'INVESTMENT_KNOWLEDGE');
            const other = lookups.filter(el => el.category === 'INVESTMENT_OTHERS');
            const liquidity = lookups.filter(el => el.category === 'INVESTMENT_LIQUIDITY_REQ');
            const risk = lookups.filter(el => el.category === 'INVESTMENT_RISK_SCENARIO');

            setPurpose(purpose);
            setHorizon(horizon);
            setPrinciple(principle);
            setKnowledge(knowledge);
            setOthers(other);
            setLiquidities(liquidity);
            setRisk(risk);

        }

        loadData();
    }, []);
    return (
        <div className="divCsa divForm" style={{display: 'none'}}>
            <form className="csaForm">
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Client
                    Suitability
                    Assessment</p>
                </div>
                <div className="col-lg-12">
                <div className="selectdiv">
                    <div className="select-placeholder">How much do you see yourself investing?</div>    
                    <select autoComplete="off" className="select2 invest-much" name="investMuch" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How much do you see yourself investing?
                        </option>
                        <option value="A1">P1,000 or less</option>
                        <option value="A2">P1,001 - P50,000</option>
                        <option value="A3">P50,001 - P100,000</option>
                        <option value="A4">P100,001 - P500,000</option>
                        <option value="A5">P500,001 - P1,000,000</option>
                        <option value="A6">More than P1,000,000</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How frequently do you see yourself investing?</div>    
                    <select autoComplete="off" className="select2 frequent-invest" name="frequentInvest" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How frequently do you see yourself investing?
                        </option>
                        <option value="A1">Only when I have available cash</option>
                        <option value="A2">Quarterly</option>
                        <option value="A3">Monthly</option>
                        <option value="A4">Weekly</option>
                        <option value="A5">More frequently than once a week</option>
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">What is the purpose of your investment?</div>    
                    <select autoComplete="off" className="select2 investment" name="investment" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> What is the purpose of your investment?
                        </option>
                        {purposes.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How long are you investing for?</div>
                    <select autoComplete="off" className="select2 investing" name="investing" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How long are you investing for?</option>
                        {horizons.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">For this investment, you are?</div>
                    <select autoComplete="off" className="select2 for-investment" name="forInvestment" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> For this investment, you are?
                        </option>
                        {principles.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}                   
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How knowledgeable are you as an investor?</div>
                    <select autoComplete="off" className="select2 investor" name="investor" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How knowledgeable are you as an
                        investor?
                        </option>
                        {knowledges.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">Which of the following have you invested in?</div>
                    <select autoComplete="off" className="invested" name="invested" value="invested[]" multiple="multiple">
                        <option value="" title="Please fill out this field." disabled> Which of the following have you invested
                        in?
                        </option>
                        {others.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}                    
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">Do you have regular liquidity?</div>
                    <select autoComplete="off" className="select2 liquidity" name="liquidity" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> Do you have a regular liquidity
                        requirement?
                        </option>
                        {liquidities.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}  
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How much drop/loss in the value of your investment can...</div>
                    <select autoComplete="off" className="select2 droploss" name="dropLoss" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How much drop/loss 
                        in the value of your investment can you accept?
                        </option>
                        {risks.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))} 
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