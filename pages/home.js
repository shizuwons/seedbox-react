import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';

function Homepage() {
    return (
        <div className="default-home">
            <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
                <div className="row align-items-center" style={{height: '80vh'}}>
                <div className="col-lg-6">
                    <img src="Image/seedbox.gif" className="img-fluid mx-auto d-flex" />
                </div>
                <div className="col-lg-6 text-center conContent">
                    <p className="pTitle">Investing </p>
                    <p className="pTitle" style={{marginTop: '-40px'}}>simplified</p>
                    <p className="pSubtitle">Seedbox Philippines is a service that lets you invest in funds online,</p>
                    <p className="pSubtitle">whether on your phone or through your desktop. Sign up once and you’re good to
                    go.</p>
                    <input type="button" className="btnLearnmore" defaultValue="LEARN MORE" />
                </div>
                </div>
            </div>
            <div className="container con conBody">
                <div className="row">
                <div className="col-lg-12">
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
                <div className="row align-items-center row1" style={{marginTop: '150px', paddingBottom: '100px'}}>
                <div className="col-lg-6 text-center">
                    <p className="pTitle">Seedbox</p>
                    <p className="pTitle" style={{marginTop: '-40px'}}>at Work</p>
                    <p className="pSubtitle">Bring the benefits of Seedbox to your workplace. 
                    Seedbox at Work can partner with your office to set up an easy investment 
                    plan via payroll deduction. We can also offer financial literacy seminars 
                    for your group. Interested? Email us at support@seedbox.ph to find out more.</p>
                </div>
                <div className="col-lg-6 colImage">
                    <img src="Image/gif2.gif" className="img-fluid mx-auto d-flex" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;