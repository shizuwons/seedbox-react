import Head from 'next/head';
import Personal from './personal';
import Address from './address';
import Professional from './professional';
import Fatca from './fatca';
import Csa from './csa';
import Pep from './pep';
import Settlement from './settlement';
import Upload from './upload';
import { functionPersonal, 
    functionAddress, functionProfessional, 
    functionCsa, functionPep, functionFatca, 
    functionUpload, functionSettlement } from '../../functions/kyc';

function KycForm() {
    return (
        <div className="row align-items-center" style={{height: '100%'}}>
        <div className="col-lg-4 col-md-4 colText" style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <img src="Image/006-money.png" className="img-fluid imgIcon mx-auto d-flex" style={{width: '70px'}} />
          <p className="pTitle text-center" style={{marginTop: '10px'}}>Personal Information
          </p>
          <p className="pSubtitle mx-auto d-flex text-center">Why invest?
            Investing makes your money work for you - 
            potentially building wealth by allowing you to outpace 
            inflation and increase value over time.<br/><br/>
            Please make sure all your personal information are 
            correct and consistent with your government issued IDs and bank accounts. </p>
        </div>
        <div className="col-lg-3 col-md-3 colStep colmid">
          <div className="row rowHide" style={{display: 'none'}}>
            <div className="col-lg-12">
              <p className="pMore1">More Information</p>
            </div>
          </div>
          <div className="row rowStep" style={{position: 'relative'}}>
            <div className="divWhite">
              <div className="divWhiteGreen">
              </div>
            </div>
            <div className="col-lg-12 colMore">
              <p className="pMore">More Information</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle" style={{zIndex: 9999}}>
                </div>
                <hr className="hrLine" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 colStepText">
              <p className="pSteps" onClick={functionPersonal}>Personal Info &gt; </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionAddress}>Address Info &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionProfessional}>Professional Details &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionCsa}>CSA &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionPep}>PEP Declaration &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine hrLast" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionFatca}>FATCA &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
                <hr className="hrLine hrLast" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionUpload}>Upload Documents &gt;</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col colCircleLast">
              <div className="divCircle" style={{position: 'relative'}}>
                <div className="circle">
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9  colStepText">
              <p className="pSteps" onClick={functionSettlement}>Settlement Info &gt;</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 colForm" style={{margin: '0 auto'}}>
          <Personal></Personal>
          <Address></Address>
          <Professional></Professional>
          <Fatca></Fatca>
          <Csa></Csa>
          <Pep></Pep>
          <Settlement></Settlement>
          <Upload></Upload>
        </div>
      </div>
    );
}

export default KycForm;