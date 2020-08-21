import Head from 'next/head';
import { useEffect } from 'react';

export default function Csa() {
    useEffect(() => {
        $(document).ready(function() {
            $(".invested").select2({
                width: "element",
                minimumResultsForSearch: -1,
                placeholder: "Which of the following have you invested in?",
                maximumSelectionLength: 3,
                multiple: true
            });

            if(localStorage.getItem('investMuch') !== null) {
                $("select[name='investMuch']").val(localStorage.getItem("investMuch")).trigger('change');
                $("select[name='investMuch']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='investMuch']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('frequentInvest') !== null) {
                $("select[name='frequentInvest']").val(localStorage.getItem("frequentInvest")).trigger('change');
                $("select[name='frequentInvest']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='frequentInvest']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('investment') !== null) {
                $("select[name='investment']").val(localStorage.getItem("investment")).trigger('change');
                $("select[name='investment']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='investment']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('investing') !== null) {
                $("select[name='investing']").val(localStorage.getItem("investing")).trigger('change');
                $("select[name='investing']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='investing']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('forInvestment') !== null) {
                $("select[name='forInvestment']").val(localStorage.getItem("forInvestment")).trigger('change');
                $("select[name='forInvestment']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='forInvestment']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('investor') !== null) {
                $("select[name='investor']").val(localStorage.getItem("investor")).trigger('change');
                $("select[name='investor']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='investor']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('invested') !== null) {
                let items = JSON.parse(localStorage.getItem('invested'));
                $("select[name='invested']").val(items).trigger('change');
                $("select[name='invested']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='invested']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('liquidity') !== null) {
                $("select[name='liquidity']").val(localStorage.getItem("liquidity")).trigger('change');
                $("select[name='liquidity']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='liquidity']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }

            if(localStorage.getItem('dropLoss') !== null) {
                $("select[name='dropLoss']").val(localStorage.getItem("dropLoss")).trigger('change');
                $("select[name='dropLoss']").siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
                $("select[name='dropLoss']").siblings(".select-placeholder").css({ opacity: "1" });                    
            }
        });

        $('.invested').on("change", function(e) { 
            let value = $('.invested').val();
      
            if(value.length !== 0) {
              $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid green !important');
              $(this).siblings(".select-placeholder").css({ opacity: "1" });
            } else {
              $(this).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important');
              $(this).siblings(".select-placeholder").css({ opacity: "0" });
            }
          });
    }, []);
    return (
        <div className="divCsa divForm" style={{ marginTop: "30px"}}>
            <form className="csaForm">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: '10px'}}>
                        <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px', fontSize: '1.5em'}}>Client
                        Suitability
                        Assessment</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="selectdiv">
                            <div className="select-placeholder">How much do you see yourself investing?</div>    
                            <select autoComplete="off" className="select2 invest-much" name="investMuch" defaultValue="">
                                <option value="" disabled> How much do you see yourself investing?
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
                                <option value="" disabled> How frequently do you see yourself investing?
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
                                <option value="" disabled> What is the purpose of your investment?
                                </option>
                                <option value="A1">To prevent capital loss while generating income.</option>
                                <option value="A2">To have a regular income source.</option>
                                <option value="A3">To generate significant capital appreciation.</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How long are you investing for?</div>
                            <select autoComplete="off" className="select2 investing" name="investing" defaultValue="">
                                <option value="" disabled> How long are you investing for?</option>
                                <option value="A1">Up to two years</option>
                                <option value="A2">3-5 Years</option>
                                <option value="A3">5-7 Years</option>
                                <option value="A4">7 years and up</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">For this investment, you are?</div>
                            <select autoComplete="off" className="select2 for-investment" name="forInvestment" defaultValue="">
                                <option value="" disabled> For this investment, you are?
                                </option>
                                <option value="A1">"Willing to accept low to no risk for general stability of your
                                money"
                                </option>
                                <option value="A2">"Willing to accept moderate risk in return for some growth
                                opportunity"
                                </option>
                                <option value="A3">"Willing to accept high risk for potentially higher return"</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How knowledgeable are you as an investor?</div>
                            <select autoComplete="off" className="select2 investor" name="investor" defaultValue="">
                                <option value="" disabled> How knowledgeable are you as an
                                investor?
                                </option>
                                <option value="A1">I am a new or novice investor</option>
                                <option value="A2">I have some knowledge about investing</option>
                                <option value="A3">I am generally knowledgeable about investing</option>
                                <option value="A4">I am very knowledgeable about investing</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">Which of the following have you invested in?</div>
                            <select autoComplete="off" className="invested" name="invested" value="invested[]" multiple="multiple">
                                <option value="" disabled> Which of the following have you invested
                                in?
                                </option>
                                <option value="A1">Cash and deposit products (e.g. time deposit, SDA)</option>
                                <option value="A2">Government securities or corporate fixed-income securities</option>
                                <option value="A3">Stocks</option>
                                <option value="A4">Mutual funds or UITFs</option>
                                <option value="A5">Insurance products (including variable unit linked products and
                                pre-need)</option>
                                <option value="A6">Offshore funds (including ETFs, REITs)</option>
                                <option value="A7">Structured financial products</option>
                                <option value="A8">Commodities</option>
                                <option value="A9">Real estate</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">Do you have regular liquidity?</div>
                            <select autoComplete="off" className="select2 liquidity" name="liquidity"  defaultValue="">
                                <option value="" disabled> Do you have a regular liquidity
                                requirement?
                                </option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            </div>
                            <div className="selectdiv">
                            <div className="select-placeholder">How much drop/loss in the value of your investment can...</div>
                            <select autoComplete="off" className="select2 droploss" name="dropLoss" defaultValue="">
                                <option value="" disabled> How much drop/loss 
                                in the value of your investment can you accept?
                                </option>
                                <option value="A1">0%</option>
                                <option value="A2">Up to 10%</option>
                                <option value="A3">Up to 15%</option>
                                <option value="A4">More than 15%</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}