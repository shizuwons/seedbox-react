export function personalValidation() {
    let fields = [
        'lastname',
        'firstname',
        'maidenname',
        'country-code',
        'mobile',
        'email',
        'civil-status',
        'gender',
        'month',
        'day',
        'year',
        'birthplace',
        'citizenship',
        'tin',
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            console.log($('.' + fields[i]).val());

            //$('.' + fields[i] + '-error span').text('This field is required.');
            // $('.' + fields[i] + '-error').css({
            //     marginTop: "-15px",
            //     marginBottom: "15px"
            // });

            // If Civil status and gender
            // if(i === 6 || i === 7 || i === 11) {
            //     $('.' + fields[i] + '-error').css({
            //         marginTop: "0",
            //         marginBottom: "15px"
            //     });
            // }

            //$('.' + fields[i] + '-error').show();
            $('.' + fields[i]).css("border-color", "red");

            // If Birthdate fields
            // if(i === 8 || i === 9 || i === 10) {
            //     $('.birthdate-error span').text('This field is required.');
            //     $('.birthdate-error').show();
            // }

            // If dropdown fields
            if(i === 3 || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11 || i === 12) {
                $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important'); 
            }

            //validated = false;
        } else {
            // If birthdate fields have been filled up
            // if($('.' + fields[8]).val().length > 0 && $('.' + fields[9]).val().length > 0 && $('.' + fields[10]).val().length > 0) {
            //     $('.birthdate-error').hide();
            // }
            // $('.' + fields[i] + '-error').hide();
        }
    });

    return validated;
}

export function addressValidation() {
    let fields = [
        'currentaddress',
        'currentcity',
        'currentregion',
        'current',
        'presentaddress',
        'presentcity',
        'presentregion',
        'present',
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).css("border-color", "red");

            if(i === 1 || i === 2 || i === 3 || i === 5 || i === 6 || i === 7) {
                $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important'); 
            }    

            //validated = false;
        }
    });

    return validated;
}

export function professionalValidation() {
    let fields = [
        'nature-work',
        'nature-business',
        'naturebusinessname',
        'workaddress',
        'workcity',
        'workprovince',
        'nature-country',
        'source-funds',
        'net-worth',
        'gross-income',
        'dos'
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).css("border-color", "red");

            if(i === 0 || i === 1 || i === 6 || i === 7 || i === 8 || i === 9 || i === 10) {
                $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important'); 
            }    

            //validated = false;
        }
    });

    return validated;
}

export function csaValidation() {
    let fields = [
        'investment',
        'investing',
        'for-investment',
        'investor',
        'invested',
        'liquidity'
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important');  

            //validated = false;
        }
    });
}

export function pepValidation() {
    let fields = [
        'government',
        'relative'
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important');  

            //validated = false;
        }
    });
}

export function fatcaValidation() {

}

export function uploadValidation() {
    let fields = [
        'id-type',
        'id-number',
        'expirymonth',
        'expiryday',
        'expiryyear'
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).css("border-color", "red");

            if(i === 0 || i === 2 || i === 3 || i === 4) {
                $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important'); 
            }    

            //validated = false;
        }
    });

    return validated;
}

export function settlementValidation() {
    let fields = [
        'bank-name',
        'account-name',
        'account-number'
    ];
    let validated = true;

    $.each(fields, function(i, e) {
        if($('.' + fields[i]).val() === "" || $('.' + fields[i]).val() === null || $('.' + fields[i]).val() === undefined) {
            $('.' + fields[i]).css("border-color", "red");

            if(i === 0) {
                $('.' + fields[i]).siblings(".select2-container").find(".selection").find(".select2-selection").attr('style', 'border: 1px solid red !important'); 
            }    

            //validated = false;
        }
    });

    return validated;
}