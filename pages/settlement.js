import Head from 'next/head';

function Settlement() {
    return (
        <div className="divSettlement divForm" style={{display: 'none'}}>
            <form>
                <div className="row">
                <div className="col-lg-12" style={{marginTop: '10px'}}>
                    <p className="pInfoTitle" style={{marginTop: '0px', marginBottom: '15px'}}>Settlement
                    Information</p>
                </div>
                <div className="col-lg-12">
                    <div className="selectdiv" style={{margin: '0 0 1em'}}>
                    <select autoComplete="off" className="select2 bank-name" id="BankName" defaultValue="default">
                        <option value="default" disabled>Bank Name</option>
                        <option value='ANZ Banking Group Ltd.'>ANZ Banking Group Ltd.</option>
                        <option value='Asia United Bank'>Asia United Bank</option>
                        <option value='Bangkok Bank Publi Co., Ltd.'>Bangkok Bank Publi Co., Ltd.</option>
                        <option value='Bank Of Americana, N.A.'>Bank Of Americana, N.A.</option>
                        <option value='Bank Of China Limited'>Bank Of China Limited</option>
                        <option value='Bank Of Commerce'>Bank Of Commerce</option>
                        <option value='Bank of the Philippine Islands'>Bank of the Philippine Islands</option>
                        <option value='BDO Unibank'>BDO Unibank</option>
                        <option value='Cathay United Bank Co., Ltd'>Cathay United Bank Co., Ltd</option>
                        <option value='China Bank Corporation'>China Bank Corporation</option>
                        <option value='Citibank'>Citibank</option>
                        <option value='CTBC Bank'>CTBC Bank</option>
                        <option value='Deutsche Bank AG'>Deutsche Bank AG</option>
                        <option value='Development Bank Of The Philippines'>Development Bank Of The Philippines</option>
                        <option value='East West Banking Corporation'>East West Banking Corporation</option>
                        <option value='GCash'>GCash</option>
                        <option value='HSBC Savings'>HSBC Savings</option>
                        <option value='Industrial Bank Of Korea'>Industrial Bank Of Korea</option>
                        <option value='ING Bank N. V.'>ING Bank N. V.</option>
                        <option value='JP Morgan Chase Bank, N.A.'>JP Morgan Chase Bank, N.A.</option>
                        <option value='Korea Exchange Bank'>Korea Exchange Bank</option>
                        <option value='Landbank'>Landbank</option>
                        <option value='Maybank'>Maybank</option>
                        <option value='Mega International Commercial Bank'>Mega International Commercial Bank</option>
                        <option value='Metrobank'>Metrobank</option>
                        <option value='Mizuho Bank, Ltd.'>Mizuho Bank, Ltd.</option>
                        <option value='Other'>Other</option>
                        <option value='Philippine Bank Of Communication'>Philippine Bank Of Communication</option>
                        <option value='Philippine National Bank'>Philippine National Bank</option>
                        <option value='Philtrust Bank'>Philtrust Bank</option>
                        <option value='Rizal Commercial Banking Corporation'>Rizal Commercial Banking Corporation</option>
                        <option value='Robinsons Bank'>Robinsons Bank</option>
                        <option value='Security Bank Corporation'>Security Bank Corporation</option>
                        <option value='Shinhan Bank'>Shinhan Bank</option>
                        <option value='Standard Chartered Bank'>Standard Chartered Bank</option>
                        <option value='Sumitomo Mitsui Banking Corporation'>Sumitomo Mitsui Banking Corporation</option>
                        <option value='The Bank Of Tokyo - Mitsubishi Ufj, Ltd.'>The Bank Of Tokyo - Mitsubishi Ufj, Ltd.</option>
                        <option value='The Hongkong And Shanghai Banking Corporation (HSBC)'>The Hongkong And Shanghai Banking Corporation (HSBC)</option>
                        <option value='Union Bank'>Union Bank</option>
                        <option value='United Coconut Planters Bank'>United Coconut Planters Bank</option>
                    </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <input required type="text" className="txtusername txtAccountname account-name" />
                    <label alt="Account Name" placeholder="Account Name" />
                </div>
                <div className="col-lg-12 ">
                    <input required type="text" className="txtusername account-number" />
                    <label alt="Account Number" placeholder="Account Number" />
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

export default Settlement;