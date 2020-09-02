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
        //console.log(response);
    });
}

// export function savePersonalInformation(formName) {
//     let firstName = $('.firstname').val();
//     let lastName = $('.lastname').val();
//     let maidenName = $('.maidenname').val();
//     let countrycode = $('.country-code').val();
//     let mobile = $('.mobile').val();
//     let email = $('.email').val();
//     let civilStatus = $('.civil-status').val();
//     let gender = $('.gender').val();
//     let month = $('.month').val();
//     let day = $('.day').val();
//     let year = $('.year').val();
//     let birthplace = $('.birthplace').val();
//     let citizenship = $('.citizenship').val();
//     let tin = $('.tin').val();
//     let sssGsis = $('.sss-gsis').val();
//     let agentCode = $('.agent-code').val();

//     let mobileNumber = "";
//     let birthdate = "";
//     if(countrycode !== null) {
//         mobileNumber = `${countrycode}-${mobile}`;
//     }

//     if(month !== null && day !== null && year !== null) {
//         let birthdate = `${year}-${month}-${day}`;
//     }

//     let data = {
//         personal_information: {
//             first_name: firstName,
//             last_name: lastName,
//             mothers_maiden_name: maidenName,
//             email: email,
//             mobile_phone_number: mobileNumber,
//             referral_agent_code: agentCode,
//             gender: gender,
//             civil_status: civilStatus,
//             birthdate: birthdate,
//             birthplace: birthplace,
//             citizenship: citizenship,
//             tin: tin,
//             sss_gsis: sssGsis
//         }
//     };

//     axios.post('https://dev.seedbox.ph/core/lite/v1/customer', 
//     data, 
//     {
//         headers: {
//             'x-token': localStorage.getItem('loginToken')
//         }
//     });
// }