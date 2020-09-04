import axios from 'axios';

let sessionEmail = "";

let blankPersonal = {
    first_name: "",
    last_name: "",
    mothers_maiden_name: "",
    email: sessionEmail,
    mobile_phone_number: "",
    referral_agent_code: "",
    gender: "",
    civil_status: "",
    birthdate: "",
    birthplace: "",
    citizenship: "",
    tin: "",
    sss_gsis: ""
};

let blankCurrent = {
    address: "",
    country: "",
    province_region: "",
    city: ""
};

let blankPresent = {
    address: "",
    country: "",
    province_region: "",
    city: ""
}

let blankProfessional = {
    employer_name: "",
    country: "",
    address: "",
    city: "",
    province: ""
}

let blankFinancial = {
    nature_of_business: "",
    nature_of_work: "",
    annual_gross_income: "",
    net_worth: "",
    is_director_officer_shareholder: "",
    source_of_funds: ""
}

let blankCsa = {
    investment_purpose: "",
    investment_amount: "",
    investment_frequency: "",
    investment_horizon: "",
    investment_principle: "",
    investment_knowledge: "",
    investment_others: [],
    investment_liquidity_req: "",
    investment_risk_scenario: ""
}

let blankPep = {
    worked_in_govt: "false",
    has_relative_in_govt: "false"
}

let blankFatca = {
    us_resident: "false",
    us_citizen: "false",
    us_power_of_attorney: "false",
    us_care_of_address: "false",
    us_resident_alien: "false",
    us_phone_number: "false",
    us_born: "false",
    us_current_address: "false",
    us_mailing_address: "false",
    us_maintained_account: "false"
}

let blankSettlement = {
    bank_name: "",
    account_number: "",
    account_name: ""
}

let blankUpload = {
    id_type: "",
    id_number: "",
    id_expiry_date: "",
    upload_id: {
        imageIdCardName: "",
        documentTypeIdCard: "",
        sourceTypeIdCard: "",
        fileSizeIdCard: "",
        fileKeyIdCard: "",
        fileLocationIdCard: "",
        fileTypeIdCard: ""
    },
    upload_signature: {
        imageSignatureName: "",
        documentTypeSignature: "",
        sourceTypeSignature: "",
        fileSizeSignature: "",
        fileKeySignature: "",
        fileLocationSignature: "",
        fileTypeSignature: ""
    }
}

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
            if($('#imguploadsig').val() !== '' || $('#imguploadsig').val() !== null) {
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

export function saveToDB() {
    /** Personal Info */
    sessionEmail = localStorage.getItem('sessionEmail');

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
        region: presentRegion,
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
    }

    let financialData = {
        nature_of_business: natureOfBusiness,
        nature_of_work: natureOfWork,
        annual_gross_income: annualGross,
        net_worth: netWorth,
        is_director_officer_shareholder: dos,
        source_of_funds: sourceOfFunds
    }

    /** CSA */
    let amount = $('.invest-much').val();
    let frequent = $('.frequent-invest').val();
    let purpose = $('.investment').val();
    let horizon = $('.investing').val();
    let principle = $('.for-investment').val();
    let knowledge = $('.investor').val();
    let other = $('.invested').val();
    let liquidity = $('.liquidity').val();
    let risk = $('.droploss').val();

    let csaData = {
        investment_purpose: purpose,
        investment_amount: "",
        investment_frequency: "",
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

    if(workedInGovt === '') {
        workedInGovt = "false";
    }

    if(relativeInGovt === '') {
        relativeInGovt = "false";
    }

    let pepData = {
        worked_in_govt: workedInGovt,
        has_relative_in_govt: relativeInGovt
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
    let expiremonth = $('.month').val();
    let expireday = $('.day').val();
    let expireyear = $('.year').val();

    let expiredate = "";
    if(expiremonth !== null && expireday !== null && expireyear !== null) {
        expiredate = `${year}-${month}-${day}`;
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
        idNumber: idNumber,
        id_expiry_date: expiredate,
        upload_id: idData,
        upload_signature: sigData
    };

    /** Settlement Information */
    
    let settlementData = blankSettlement;

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

    toEndpoint(data);
}

function toEndpoint(data) {
    axios.post('https://dev.seedbox.ph/core/lite/v1/customer', 
    data, 
    {
        headers: {
            'x-token': localStorage.getItem('loginToken')
        }
    }).then(response => {
        console.log(response);
        if(response.data.code === "100") {
            alert('Session has expired, please log out and log in again.');
        }
    }).catch(err => {
        alert('Session has expired, please log out and log in again.');
    });
}