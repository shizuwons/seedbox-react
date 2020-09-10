import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { prefillCSA } from '../../functions/prefillForm';
import { arrangeValues } from '../../functions/functions';

function Csa() {
    const [amounts, setAmount] = useState([]);
    const [frequencies, setFrequency] = useState([]);
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
            let amount = lookups.filter(el => el.category === 'INVESTMENT_AMOUNT');
            let frequency = lookups.filter(el => el.category === 'INVESTMENT_FREQUENCY');
            let purpose = lookups.filter(el => el.category === 'INVESTMENT_PURPOSE');
            let horizon = lookups.filter(el => el.category === 'INVESTMENT_HORIZON');
            let principle = lookups.filter(el => el.category === 'INVESTMENT_PRINCIPLE');
            let knowledge = lookups.filter(el => el.category === 'INVESTMENT_KNOWLEDGE');
            let other = lookups.filter(el => el.category === 'INVESTMENT_OTHERS');
            let liquidity = lookups.filter(el => el.category === 'INVESTMENT_LIQUIDITY_REQ');
            let risk = lookups.filter(el => el.category === 'INVESTMENT_RISK_SCENARIO');

            amount = arrangeValues(amount, 138);
            amount = arrangeValues(amount, 139);
            amount = arrangeValues(amount, 140);
            amount = arrangeValues(amount, 141);
            amount = arrangeValues(amount, 142);
            amount = arrangeValues(amount, 143); 
            
            frequency = arrangeValues(frequency, 148);
            frequency = arrangeValues(frequency, 147);
            frequency = arrangeValues(frequency, 146);
            frequency = arrangeValues(frequency, 145);
            frequency = arrangeValues(frequency, 144);

            purpose = arrangeValues(purpose, 135);
            purpose = arrangeValues(purpose, 136);
            purpose = arrangeValues(purpose, 137);

            horizon = arrangeValues(horizon, 149);
            horizon = arrangeValues(horizon, 150);
            horizon = arrangeValues(horizon, 152);
            horizon = arrangeValues(horizon, 151);

            principle = arrangeValues(principle, 107);
            principle = arrangeValues(principle, 108);
            principle = arrangeValues(principle, 109);

            knowledge = arrangeValues(knowledge, 131);
            knowledge = arrangeValues(knowledge, 132);
            knowledge = arrangeValues(knowledge, 133);
            knowledge = arrangeValues(knowledge, 134);

            risk = arrangeValues(risk, 103);
            risk = arrangeValues(risk, 104);
            risk = arrangeValues(risk, 105);
            risk = arrangeValues(risk, 106);

            setAmount(amount);
            setFrequency(frequency);
            setPurpose(purpose);
            setHorizon(horizon);
            setPrinciple(principle);
            setKnowledge(knowledge);
            setOthers(other);
            setLiquidities(liquidity);
            setRisk(risk);

            prefillCSA();
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
                        {amounts.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}
                    </select>
                    </div>
                    <div className="selectdiv">
                    <div className="select-placeholder">How frequently do you see yourself investing?</div>    
                    <select autoComplete="off" className="select2 frequent-invest" name="frequentInvest" defaultValue="">
                        <option value="" title="Please fill out this field." disabled> How frequently do you see yourself investing?
                        </option>
                        {frequencies.map((e, index) =>(
                            <option key={index} value={e.code}>{e.value}</option>
                        ))}
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