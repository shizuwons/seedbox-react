import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';

function Individual() {
    return (
        <div className="individual-home hide">
            <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
                <div className="row align-items-center" style={{height: '80vh'}}>
                    <div className="col-lg-6">
                        <img src="Image/seedbox.gif" className="img-fluid mx-auto d-flex" />
                    </div>
                    <div className="col-lg-6">
                        <p className="pHow">How it works</p>
                        <div className="box form-inline" style={{marginTop: '25px'}}>
                            <div className="divIcon1 form-inline">
                                <div className="divIcon" style={{padding: '10px 20px'}}>
                                <img src="Image/sign-up.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                                <p className="pBox">Sign Up</p>
                                </div>
                                <div className="divIcon" style={{padding: '10px 20px'}}>
                                <img src="Image/goal.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                                <p className="pBox">Know your goals</p>
                                </div>
                            </div>
                            <div className="divIcon2 form-inline align-items-center">
                                <div className="divIcon divIcon3 align-items-center" style={{padding: '10px 20px'}}>
                                <img src=" Image/planner.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon" />
                                <p className="pBox">Use the goal planner</p>
                                </div>
                                <div className="divIcon divIcon4" style={{padding: '10px 20px', display: 'inline-block'}}>
                                <img src=" Image/invest.png" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgIcon imgInvest" />
                                <p className="pBox">Invest</p>
                                </div>
                            </div>
                            <div className="divIcon3">
                                <div className="divIconlast divIcon5" style={{padding: '10px 20px'}}>
                                <img src="Image/habit.svg" style={{width: '65px'}} className="img-fluid mx-auto d-flex imgLast" />
                                <p className="pBox">Build the habit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Individual;