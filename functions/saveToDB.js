import axios from 'axios';

export function saveImage(img, type) {
    let idformData = new FormData();
    idformData.set("upload_type", type);
    idformData.append("filename", img);

    axios.post('https://dev.seedbox.ph/core/lite/v1/upload_image', 
    idformData, 
    {
        headers: {
            'Content-Type': 'multipart/form-data',
            'x-token': localStorage.getItem('loginToken')
        }
    }).then(response => {
        if(response.data.data.document_type === 'DocTyp01') {
            localStorage.setItem('iddocType', response.data.data.document_type);
            localStorage.setItem('idfileKey', response.data.data.file_key);
            localStorage.setItem('idfileLocation', response.data.data.file_location);
            localStorage.setItem('idfileName', response.data.data.file_name);
            localStorage.setItem('idfileSize', response.data.data.file_size);
            localStorage.setItem('idfileType', response.data.data.file_type);
            localStorage.setItem('idsourceType', response.data.data.source_type);
            if($('#imguploadsig').val() !== '') {
                saveToDB();
            }
        } else if(response.data.data.document_type === 'DocTyp03') {
            localStorage.setItem('sigdocType', response.data.data.document_type);
            localStorage.setItem('sigfileKey', response.data.data.file_key);
            localStorage.setItem('sigfileLocation', response.data.data.file_location);
            localStorage.setItem('sigfileName', response.data.data.file_name);
            localStorage.setItem('sigfileSize', response.data.data.file_size);
            localStorage.setItem('sigfileType', response.data.data.file_type);
            localStorage.setItem('sigsourceType', response.data.data.source_type);
            saveToDB();
        }
    });
}

export function saveToDB(type = "") {
    /** Personal Info */

    let firstName = $('.firstname').val();
    let lastName = $('.lastname').val();
    let maidenName = $('.maidenname').val();
    let countrycode = $('.country-code').val();
    let mobile = $('.mobile').val();
    let email = $('.email').val();
    let civilStatus = $('.civil-status').val();
    let gender = $('.gender').val();
    let month = $('.month').val();
    let day = $('.day').val();
    let year = $('.year').val();
    let birthplace = $('.birthplace').val();
    let citizenship = $('.citizenship').val();
    let tin = $('.tin').val();
    let sssGsis = $('.sss-gsis').val();
    let agentCode = $('.agent-code').val();

    let mobileNumber = "";
    let birthdate = "";
    if(countrycode !== null) {
        mobileNumber = `${countrycode}-${mobile}`;
    }

    if(month !== null && day !== null && year !== null) {
        birthdate = `${year}-${month}-${day}`;
    }

    let personalData = {
        first_name: firstName,
        last_name: lastName,
        mothers_maiden_name: maidenName,
        email: email,
        mobile_phone_number: mobileNumber,
        referral_agent_code: agentCode,
        gender: gender,
        civil_status: civilStatus,
        birthdate: birthdate,
        birthplace: birthplace,
        citizenship: citizenship,
        tin: tin,
        sss_gsis: sssGsis
    };

    /** Address Info */
    let currentAddress = $('.currentaddress').val();
    let currentCountry = $('.current').val();
    let currentRegion = $('.currentregion').val();
    let currentCity = $('.currentcity').val();

    let presentAddress = $('.presentaddress').val();
    let presentCountry = $('.present').val();
    let presentRegion = $('.presentregion').val();
    let presentCity = $('.presentcity').val();

    let currentData = {
        address: currentAddress,
        country: currentCountry,
        province: currentRegion,
        city: currentCity
    };

    let presentData = {
        address: presentAddress,
        country: presentCountry,
        province: presentRegion,
        city: presentCity
    };

    /** Professional Info */
    let natureOfWork = $('.nature-work').val();
    let natureOfBusiness = $('.nature-business').val();
    let businessName = $('.naturebusinessname').val();
    let dos = $('.dos').val();
    let workAddress = $('.workaddress').val();
    let workCountry = $('.nature-country').val();
    let workRegion = $('.workregion').val();
    let workCity = $('.workcity').val();

    let sourceOfFunds = $('.source-funds').val();
    let netWorth = $('.net-worth').val();
    let annualGross = $('.gross-income').val();

    let professionalData = {
        employer_name: businessName,
        country: workCountry,
        address: workAddress,
        city: workCity,
        province: workRegion
    };

    let dosVal = true;
    if(dos === "true") {
        dosVal = true;
    } else if(dos === "false") {
        dosVal = false;
    }

    let financialData = {
        nature_of_business: natureOfBusiness,
        nature_of_work: natureOfWork,
        annual_gross_income: annualGross,
        net_worth: netWorth,
        is_director_officer_shareholder: dosVal,
        source_of_funds: sourceOfFunds
    };

    /** CSA */
    let amount = $('.invest-much').val();
    let frequent = $('.frequent-invest').val();
    let purpose = $('.investment').val();
    let horizon = $('.investing').val();
    let principle = $('.for-investment').val();
    let knowledge = $('.investor').val();
    let otherVals = $('.invested').val();
    let liquidity = $('.liquidity').val();
    let risk = $('.droploss').val();

    // let otherStr = otherVals.join();
    let other = [];
    otherVals.forEach(element => {
        other.push(parseInt(element));
    });

    let csaData = {
        investment_purpose: purpose,
        investment_amount: amount,
        investment_frequency: frequent,
        investment_horizon: horizon,
        investment_principle: principle,
        investment_knowledge: knowledge,
        investment_others: other,
        investment_liquidity_req: liquidity,
        investment_risk_scenario: risk
    }

    /** PEP */
    let workedInGovt = $('.government').val();
    let relativeInGovt = $('.relative').val();
    let govt = true;
    let rel = true;

    if(workedInGovt === '') {
        govt = false;
    }

    if(relativeInGovt === '') {
        rel = false;
    }

    if(workedInGovt === "true") {
        govt = true;
    } else {
        govt = false;
    }

    if(relativeInGovt === "true") {
        rel = true;
    } else {
        rel = false;
    }

    let pepData = {
        worked_in_govt: govt,
        has_relative_in_govt: rel
    }

    /** FATCA */
    let usCitizen = "false";
    let usResident = "false";
    let usResidentAlien = "false";
    let usTelephone = "false";
    let usBorn = "false";
    let usAddress = "false";
    let usMailing = "false";
    let transferFunds = "false";
    let usAttorney = "false";
    let usCareOf = "false";

    if($("input[name='USCitizen']").is(':checked')) {
        usCitizen = "true";
    }

    if($("input[name='USResident']").is(':checked')) {
        usResident = "true";
    }

    if($("input[name='USResidentAlien']").is(':checked')) {
        usResidentAlien = "true";
    }

    if($("input[name='USTelephone']").is(':checked')) {
        usTelephone = "true";
    }

    if($("input[name='USBorn']").is(':checked')) {
        usBorn = "true";
    }

    if($("input[name='USAddress']").is(':checked')) {
        usAddress = "true";
    }

    if($("input[name='USMailing']").is(':checked')) {
        usMailing = "true";
    }

    if($("input[name='TransferFunds']").is(':checked')) {
        transferFunds = "true";
    }

    if($("input[name='USPowerOfAttorney']").is(':checked')) {
        usAttorney = "true";
    }

    if($("input[name='USCareOfAddress']").is(':checked')) {
        usCareOf = "true";
    }

    let fatcaData = {
        us_resident: usResident,
        us_citizen: usCitizen,
        us_power_of_attorney: usAttorney,
        us_care_of_address: usCareOf,
        us_resident_alien: usResidentAlien,
        us_phone_number: usTelephone,
        us_born: usBorn,
        us_current_address: usAddress,
        us_mailing_address: usMailing,
        us_maintained_account: transferFunds
    }

    /** Upload Data */
    let idType = $('.idtype').val();
    let idNumber = $('.id-number').val();
    let expiremonth = $('.expirymonth').val();
    let expireday = $('.expiryday').val();
    let expireyear = $('.expiryyear').val();

    let expiredate = "";
    if(expiremonth !== null && expireday !== null && expireyear !== null) {
        expiredate = `${expireyear}-${expiremonth}-${expireday}`;
    }

    let idData = {
        imageIdCardName: localStorage.getItem('idfileName'),
        documentTypeIdCard: localStorage.getItem('iddocType'),
        sourceTypeIdCard: localStorage.getItem('idsourceType'),
        fileSizeIdCard: localStorage.getItem('idfileSize'),
        fileKeyIdCard: localStorage.getItem('idfileKey'),
        fileLocationIdCard: localStorage.getItem('idfileLocation'),
        fileTypeIdCard: localStorage.getItem('idfileType')
    }

    let sigData = {
        imageSignatureName: localStorage.getItem('sigfileName'),
        documentTypeSignature: localStorage.getItem('sigdocType'),
        sourceTypeSignature: localStorage.getItem('sigsourceType'),
        fileSizeSignature: localStorage.getItem('sigfileSize'),
        fileKeySignature: localStorage.getItem('sigfileKey'),
        fileLocationSignature: localStorage.getItem('sigfileLocation'),
        fileTypeSignature: localStorage.getItem('sigfileType')
    }

    let uploadData = {
        id_type: idType,
        id_number: idNumber,
        id_expiry_date: expiredate,
        upload_id: idData,
        upload_signature: sigData
    };

    /** Settlement Information */
    let bankName = $('.bank-name').val();
    let accountName = $('.account-name').val();
    let accountNumber = $('.account-number').val();
    
    let settlementData = {
        bank_name: bankName,
        account_number: accountNumber,
        account_name: accountName
    };

    let data = {
        personal_information: personalData,
        current_address: currentData,
        permanent_address: presentData,
        professional_details: professionalData,
        financial_profile: financialData,
        csa: csaData,
        pep_declaration: pepData,
        fatca: fatcaData,
        settlement_information: settlementData,
        id_information: uploadData
    };

    console.log(data);

    toEndpoint(data, type);
}

function toEndpoint(data, type) {
    axios.post('https://dev.seedbox.ph/core/lite/v1/customer', 
    data, 
    {
        headers: {
            'x-token': localStorage.getItem('loginToken')
        }
    }).then(response => {
        //console.log(response);
        if(response.data.code === "100") {
            alert('Session has expired, please log out and log in again.');
        } else {
            if(window.location.href.indexOf("summary") > -1) {
                if(type !== 'save') {
                    $('#thankYouModal').modal('show');
                } else {
                    alert('Your changes have been saved but your KYC information is not yet complete. You can finish your KYC information later and submit to activate your account.');
                    window.location = '/';
                }
            }
        }
    }).catch(err => {
        console.log(err);
        alert('Session has expired, please log out and log in again.');
    });
}