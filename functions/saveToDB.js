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
        //console.log(response);
    });
}

export function savePersonalInformation() {
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

    let currentData, presentData, professionalData, financialData, csaData, pepData, fatcaData, uploadData, settlementData;

    // Address
    if(localStorage.getItem('currentData') === null) {
        currentData = blankCurrent;
    } else {
        currentData = JSON.parse(localStorage.getItem('currentData'));
    }

    if(localStorage.getItem('presentData') === null) {
        presentData = blankPresent;
    } else {
        currentData = JSON.parse(localStorage.getItem('presentData'));
    }

    // Professional
    if(localStorage.getItem('professionalData') === null) {
        professionalData = blankProfessional;
    } else {
        professionalData = JSON.parse(localStorage.getItem('professionalData'));
    }

    if(localStorage.getItem('financialData') === null) {
        financialData = blankFinancial;
    } else {
        financialData = JSON.parse(localStorage.getItem('financialData'));
    }

    // CSA
    if(localStorage.getItem('csaData') === null) {
        csaData = blankCsa;
    } else {
        csaData = JSON.parse(localStorage.getItem('csaData'));
    }

    // PEP
    if(localStorage.getItem('pepData') === null) {
        pepData = blankPep;
    } else {
        pepData = JSON.parse(localStorage.getItem('pepData'));
    }

    // Fatca
    if(localStorage.getItem('fatcaData') === null) {
        fatcaData = blankFatca;
    } else {
        fatcaData = JSON.parse(localStorage.getItem('fatcaData'));
    }

    // Upload
    if(localStorage.getItem('uploadData') === null) {
        uploadData = blankUpload;
    } else {
        uploadData = JSON.parse(localStorage.getItem('uploadData'));
    }

    // Settlement
    if(localStorage.getItem('settlementData') === null) {
        settlementData = blankSettlement;
    } else {
        settlementData = JSON.parse(localStorage.getItem('settlementData'));
    }

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

    //console.log(data);
    localStorage.setItem('personalData', JSON.stringify(personalData));

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

export function saveAddressInformation() {
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

    let personalData, professionalData, financialData, csaData, pepData, fatcaData, uploadData, settlementData;

    // Personal
    if(localStorage.getItem('personalData') === null) {
        personalData = blankProfessional;
    } else {
        personalData = JSON.parse(localStorage.getItem('personalData'));
    }

    // Professional
    if(localStorage.getItem('professionalData') === null) {
        professionalData = blankProfessional;
    } else {
        professionalData = JSON.parse(localStorage.getItem('professionalData'));
    }

    if(localStorage.getItem('financialData') === null) {
        financialData = blankFinancial;
    } else {
        financialData = JSON.parse(localStorage.getItem('financialData'));
    }

    // CSA
    if(localStorage.getItem('csaData') === null) {
        csaData = blankCsa;
    } else {
        csaData = JSON.parse(localStorage.getItem('csaData'));
    }

    // PEP
    if(localStorage.getItem('pepData') === null) {
        pepData = blankPep;
    } else {
        pepData = JSON.parse(localStorage.getItem('pepData'));
    }

    // Fatca
    if(localStorage.getItem('fatcaData') === null) {
        fatcaData = blankFatca;
    } else {
        fatcaData = JSON.parse(localStorage.getItem('fatcaData'));
    }

    // Upload
    if(localStorage.getItem('uploadData') === null) {
        uploadData = blankUpload;
    } else {
        uploadData = JSON.parse(localStorage.getItem('uploadData'));
    }

    // Settlement
    if(localStorage.getItem('settlementData') === null) {
        settlementData = blankSettlement;
    } else {
        settlementData = JSON.parse(localStorage.getItem('settlementData'));
    }

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

    //console.log(data);
    localStorage.setItem('currentData', JSON.stringify(currentData));
    localStorage.setItem('presentData', JSON.stringify(presentData));

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

export function saveProfessionalInformation() {
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

    let personalData, currentData, presentData, csaData, pepData, fatcaData, uploadData, settlementData;

    // Personal
    if(localStorage.getItem('personalData') === null) {
        personalData = blankProfessional;
    } else {
        personalData = JSON.parse(localStorage.getItem('personalData'));
    }

    // Address
    if(localStorage.getItem('currentData') === null) {
        currentData = blankCurrent;
    } else {
        currentData = JSON.parse(localStorage.getItem('currentData'));
    }

    if(localStorage.getItem('presentData') === null) {
        presentData = blankPresent;
    } else {
        currentData = JSON.parse(localStorage.getItem('presentData'));
    }

    // CSA
    if(localStorage.getItem('csaData') === null) {
        csaData = blankCsa;
    } else {
        csaData = JSON.parse(localStorage.getItem('csaData'));
    }

    // PEP
    if(localStorage.getItem('pepData') === null) {
        pepData = blankPep;
    } else {
        pepData = JSON.parse(localStorage.getItem('pepData'));
    }

    // Fatca
    if(localStorage.getItem('fatcaData') === null) {
        fatcaData = blankFatca;
    } else {
        fatcaData = JSON.parse(localStorage.getItem('fatcaData'));
    }

    // Upload
    if(localStorage.getItem('uploadData') === null) {
        uploadData = blankUpload;
    } else {
        uploadData = JSON.parse(localStorage.getItem('uploadData'));
    }

    // Settlement
    if(localStorage.getItem('settlementData') === null) {
        settlementData = blankSettlement;
    } else {
        settlementData = JSON.parse(localStorage.getItem('settlementData'));
    }

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

    //console.log(data);
    localStorage.setItem('professionalData', JSON.stringify(professionalData));
    localStorage.setItem('financialData', JSON.stringify(financialData));

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