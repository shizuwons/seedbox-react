import Head from 'next/head'
import Router from 'next/router';
import Default from '../layouts/default';

function Work() {
    return (
        <div className="work-home hide">
            <div className="container con h-100 conMainBody" style={{padding: '20px 15px', backgroundColor: '#fafafa'}}>
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

export default Work;