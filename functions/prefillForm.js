import axios from 'axios';
import iso88592 from 'iso-8859-2';

export function prefillPersonalForm() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let data = response.data.personal_information;
        
        let mobileNumStr = data.mobile_phone_number;
        let mobileNumArr = mobileNumStr.split("-");
        
        $('.lastname').val(data.last_name);
        $('.firstname').val(data.first_name);
        $('.maidenname').val(data.mothers_maiden_name);
        $('.email').val(data.email);
        $('.mobile').val(mobileNumArr[1]);
        $('.country-code').val(mobileNumArr[0]).trigger('change');
        $('.birthplace').val(data.birthplace).trigger('change');
        $('.tin').val(data.tin);
        $('.sssGsis').val(data.sss_gsis);
        $('.agent-code').val(data.referral_agent_code);
    
        // Field borders when has value
        $('.txtusername').each(function() {
            if($(this).val().length > 0) {
                $(this).css({borderColor: 'green'});
            }
        });
    });
}

export function prefillBirthdate() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let birthDateStr = response.data.personal_information.birthdate;
        let birthdateArr = birthDateStr.split("-");
        //let civilStatus = response.data.personal_information.civil_status;
        $('.year').val(birthdateArr[0]).trigger('change');
        $('.month').val(birthdateArr[1].toString()).trigger('change');
        $('.day').val(birthdateArr[2].toString()).trigger('change');
        if(birthdateArr[2].substring(0, 1) === "0") {
            $('.day').val(birthdateArr[2].substring(1, 2)).trigger('change');
        } else {
            $('.day').val(birthdateArr[2].substring(0, 2)).trigger('change');
        }
        $('.gender').val(response.data.personal_information.gender).trigger('change');
        $('.citizenship').val(response.data.personal_information.citizenship).trigger('change');
        $('.civil-status').val(response.data.personal_information.civil_status).trigger('change');
    });
}

export function prefillAddressInfo() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let currentFields = response.data.current_address;
        let presentFields = response.data.permanent_address;

        $('.currentaddress').val(currentFields.address);
        $('.presentaddress').val(presentFields.address);
        if(currentFields.country !== "" && currentFields.country !== null && currentFields.country !== "null") {
            $('.current').val(currentFields.country).trigger('change');
        }

        if(presentFields.country !== "" && presentFields.country !== null && presentFields.country !== "null") {
            $('.present').val(presentFields.country).trigger('change');
        }

        // Field borders when has value
        $('.txtusername').each(function() {
            if($(this).val().length > 0) {
                $(this).css({borderColor: 'green'});
            }
        });
    });
}

export function prefillProvince(type) {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        if(type === 'current') {
            let currentFields = response.data.current_address;

            // $('.currentregion').val(currentFields.province);
            if(currentFields.province_region !== "" && currentFields.province_region !== null && currentFields.province_region !== "null") {
                $('.currentregion').val(currentFields.province_region).trigger('change');
            }
        } else if(type === 'present') {
            let presentFields = response.data.permanent_address;

            if(presentFields.province_region !== "" && presentFields.province_region !== null && presentFields.province_region !== "null") {
                $('.presentregion').val(presentFields.province_region).trigger('change');
            }
        } else if(type === 'work') {
            let professionalData = response.data.professional_details;

            if(professionalData.province_region !== "" && professionalData.province_region !== null && professionalData.province_region !== "null") {
                $('.workregion').val(professionalData.province_region).trigger('change');
            }
        }
    });
}

export function prefillCity(type) {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        if(type === 'current') {
            let currentFields = response.data.current_address;

            // $('.currentregion').val(currentFields.province);
            if(currentFields.city !== "" && currentFields.city !== null && currentFields.city !== "null") {
                $('.currentcity').val(currentFields.city).trigger('change');
            }
        } else if(type === 'present') {
            let presentFields = response.data.permanent_address;

            if(presentFields.city !== "" && presentFields.city !== null && presentFields.city !== "null") {
                $('.presentcity').val(presentFields.city).trigger('change');
            }
        } else if(type === 'work') {
            let professionalData = response.data.professional_details;

            if(professionalData.city !== "" && professionalData.city !== null && professionalData.city !== "null") {
                $('.workcity').val(professionalData.city).trigger('change');
            }
        }
    });
}

export function prefillProfessionalDetails() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let professionalData = response.data.professional_details;
        let financialData = response.data.financial_profile;

        $('.naturebusinessname').val(professionalData.employer_name);
        $('.workaddress').val(professionalData.address);

        if(professionalData.country !== "" && professionalData.country !== null && professionalData.country !== "null") {
            $('.nature-country').val(professionalData.country).trigger('change');
        }

        if(financialData.nature_of_work !== "" && financialData.nature_of_work !== null && financialData.nature_of_work !== "null") {
            $('.nature-work').val(financialData.nature_of_work).trigger('change');
        }

        // $('.nature-work > option').each(function() {
        //     alert(this.text + ' ' + this.value);
        // });

        if(financialData.nature_of_business !== "" && financialData.nature_of_business !== null && financialData.nature_of_business !== "null") {
            $('.nature-business').val(financialData.nature_of_business).trigger('change');
        }

        console.log(financialData.is_director_officer_shareholder);
        if(financialData.is_director_officer_shareholder) {
            $('.dos').val("true").trigger('change');
        } else {
            $('.dos').val("false").trigger('change');
        }

        if(financialData.source_of_funds !== "" && financialData.source_of_funds !== null && financialData.source_of_funds !== "null") {
            $('.source-funds').val(financialData.source_of_funds).trigger('change');
        }

        //$('.net-worth').val(financialData.net_worth).trigger('change');
        if(financialData.net_worth !== "" && financialData.net_worth !== null && financialData.net_worth !== "null") {
            $('.net-worth').val(financialData.net_worth).trigger('change');
        }

        if(financialData.annual_gross_income !== "" && financialData.annual_gross_income !== null && financialData.annual_gross_income !== "null") {
            $('.gross-income').val(financialData.annual_gross_income).trigger('change');
        }


        // Field borders when has value
        $('.txtusername').each(function() {
            if($(this).val().length > 0) {
                $(this).css({borderColor: 'green'});
            }
        });
    });
}

export function prefillCSA() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let csaData = response.data.csa;

        console.log(csaData.investment_others);
        $('.invest-much').val(csaData.investment_amount).trigger('change');
        $('.frequent-invest').val(csaData.investment_frequency).trigger('change');
        $('.investment').val(csaData.investment_purpose).trigger('change');
        $('.investing').val(csaData.investment_horizon).trigger('change');
        $('.for-investment').val(csaData.investment_principle).trigger('change');
        $('.investor').val(csaData.investment_knowledge).trigger('change');
        $('.invested').val(csaData.investment_others).trigger('change');
        $('.liquidity').val(csaData.investment_liquidity_req).trigger('change');
        $('.droploss').val(csaData.investment_risk_scenario).trigger('change');
    });
}

export function prefillPEP() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let pepData = response.data.pep_declaration;

        if(pepData.worked_in_govt) {
            $('.government').val("true").trigger('change');
        } else {
            $('.government').val("false").trigger('change');
        }

        if(pepData.has_relative_in_govt) {
            $('.relative').val("true").trigger('change');
        } else {
            $('.relative').val("false").trigger('change');
        }
    });
}

export function prefillFatca() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let fatcaData = response.data.fatca;

        if(fatcaData.us_resident === "Yes") {
            $("input[name='USResident']").click();
        }

        if(fatcaData.us_citizen === "Yes") {
            $("input[name='USCitizen']").click();
        }

        if(fatcaData.us_power_of_attorney === "Yes") {
            $("input[name='USPowerOfAttorney']").click();
        }

        if(fatcaData.us_care_of_address === "Yes") {
            $("input[name='USCareOfAddress']").click();
        }

        if(fatcaData.us_resident_alien === "Yes") {
            $("input[name='USResidentAlien']").click();
        }

        if(fatcaData.us_phone_number === "Yes") {
            $("input[name='USTelephone']").click();
        }

        if(fatcaData.us_born === "Yes") {
            $("input[name='USBorn']").click();
        }

        if(fatcaData.us_current_address === "Yes") {
            $("input[name='USAddress']").click();
        }

        if(fatcaData.us_mailing_address === "Yes") {
            $("input[name='USMailing']").click();
        }

        if(fatcaData.us_maintained_account === "Yes") {
            $("input[name='TransferFunds']").click();
        }
    });
}

export function prefillIDData() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let idData = response.data.id_information;

        if(idData.id_type !== "" && idData.id_type !== null && idData.id_type !== "null") {
            $('.idtype').val(idData.id_type).trigger('change');
        }

        $('.id-number').val(idData.id_number);
        
        if(idData.id_expiry_date !== "" &&  idData.id_expiry_date !== null) {
            let expiryDataStr = idData.id_expiry_date;
            let expiryDataArr = expiryDataStr.split("-");
            let expiryDayArr = expiryDataArr[2].split(":");
            $('.expiryyear').val(expiryDataArr[0]).trigger('change');
            $('.expirymonth').val(expiryDataArr[1]).trigger('change');
            if(expiryDayArr[0].substring(0, 1) === "0") {
                $('.expiryday').val(expiryDayArr[0].substring(1, 2)).trigger('change');
            } else {
                $('.expiryday').val(expiryDayArr[0].substring(0, 2)).trigger('change');
            }
        }

        // Image
       // console.log(idData.upload_id.fileKeyIdCard);
        // axios.get('https://dev.seedbox.ph/core/lite/v1/download?id=' + idData.upload_id.fileKeyIdCard, {
        //     headers: {
        //         'x-token': token,
        //     }
        // })
        // .then(response => {
        //   console.log(btoa(unescape(encodeURIComponent(response.data))));

        //   $('.idimage').attr('src', 'data:image/jpeg;base64,' + btoa(unescape(encodeURIComponent(response.data))));
        //  });

        axios.request({
            method: 'GET',
            url: 'https://dev.seedbox.ph/core/lite/v1/download?id=' + idData.upload_id.fileKeyIdCard,
            responseType: 'arraybuffer',
            responseEncoding: 'binary',
            headers: {
                'x-token': token,
            }
        }).then(response => {
            // let imgStr = String.fromCharCode.apply(null, new Uint8Array(response.data));
            // let imgData = btoa(imgStr);
            let imgData = btoa(new Uint8Array(response.data).reduce(
                function (data, byte) {
                    return data + String.fromCharCode(byte);
                },
                ''
            ));
            if(window.location.href.indexOf("summary") > -1) {
                $('.idimage').attr('src', 'data:image/jpeg;base64,' + imgData);
            } else if(window.location.href.indexOf("kyc") > -1) {
                $('#idPreview').attr('src', 'data:image/jpeg;base64,' + imgData);
            }
        });

        axios.request({
            method: 'GET',
            url: 'https://dev.seedbox.ph/core/lite/v1/download?id=' + idData.upload_signature.fileKeySignature,
            responseType: 'arraybuffer',
            responseEncoding: 'binary',
            headers: {
                'x-token': token,
            }
        }).then(response => {
            // let imgStr = String.fromCharCode.apply(null, new Uint8Array(response.data));
            // let imgData = btoa(imgStr);

            let imgData = btoa(new Uint8Array(response.data).reduce(
                function (data, byte) {
                    return data + String.fromCharCode(byte);
                },
                ''
            ));
            if(window.location.href.indexOf("summary") > -1) {
                $('.signatureimage').attr('src', 'data:image/jpeg;base64,' + imgData);
            } else if(window.location.href.indexOf("kyc") > -1) {
                $('#sigPreview').attr('src', 'data:image/jpeg;base64,' + imgData);
            }
        });

    });
}

export function prefillSettlementInfo() {
    let email = localStorage.getItem('sessionEmail');
    let token = localStorage.getItem('loginToken');
    axios.get('https://dev.seedbox.ph/core/lite/v1/customer', 
    {
        params: {
          email: email,
        },
        headers: {
          'x-token': token,
        }
    }).then(response => {
        let settlementData = response.data.settlement_information;

        if(settlementData.bank_name !== "" && settlementData.bank_name !== null && settlementData.bank_name !== "null") {
            $('.bank-name').val(settlementData.bank_id).trigger('change');
        }

        if(settlementData.account_name === "" || settlementData.account_name === null) {
            $('.account-name').val($('.firstname').val() + " " + $('.lastname').val());
        } else {
            $('.account-name').val(settlementData.account_name);
        }

        $('.account-number').val(settlementData.account_number);
    });
}