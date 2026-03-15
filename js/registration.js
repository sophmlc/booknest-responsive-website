"use strict";
$(document).ready( () => {
    $("#email").focus();

    
    $("#registration_form").submit( event => {
        let isValid = true;
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();

        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);

        

        
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);

        const postcode = $("#postcode").val().trim();
        const postcodePattern = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2})$/i;        if (postcode == "") {
            $("#postcode").next().text("This field is required.");
            isValid = false;
        } else if ( !postcodePattern.test(postcode) ) {
            $("#postcode").next().text("Must be a valid UK postcode.");
            isValid = false;
        } else {
            $("#postcode").next().text("");
        }

        const city = $("#city").val().trim();
        if (city == "") {
            $("#city").next().text("This field is required.");
            isValid = false;
        } else {
            $("#city").next().text("");
        }

        const address = $("#address").val().trim();
        if (address == "") {
            $("#address").next().text("This field is required.");
            isValid = false;
        } else {
            $("#address").next().text("");
        }

        // validate the phone number with a regular expression


        const phonePattern = /^\d{11}$/;
        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Must be 11 digits.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});

