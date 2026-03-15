"use strict";

$(document).ready(() => {
    $("#email").focus();

    /* ---- helpers ---- */
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const postcodePattern = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2})$/i;

    function normalisePhone(val) {
        return val.replace(/[\s\-]/g, "");
    }

    function showError(fieldId, msg) {
        const field = $("#" + fieldId);
        field.next("span").text(msg);
        if (msg) field.addClass("input-error");
        else field.removeClass("input-error");
    }

    /* ---- per-field validators (return true if valid) ---- */
    function validateEmail() {
        const val = $("#email").val().trim();
        $("#email").val(val);
        if (val === "") { showError("email", "This field is required."); return false; }
        if (!emailPattern.test(val)) { showError("email", "Must be a valid email address."); return false; }
        showError("email", ""); return true;
    }

    function validateFirstName() {
        const val = $("#first_name").val().trim();
        if (val === "") { showError("first_name", "This field is required."); return false; }
        showError("first_name", ""); return true;
    }

    function validateLastName() {
        const val = $("#last_name").val().trim();
        $("#last_name").val(val);
        if (val === "") { showError("last_name", "This field is required."); return false; }
        showError("last_name", ""); return true;
    }

    function validatePhone() {
        const raw = $("#phone").val().trim();
        const digits = normalisePhone(raw);
        if (raw === "") { showError("phone", "This field is required."); return false; }
        if (!/^\d{11}$/.test(digits)) { showError("phone", "Must be 11 digits (spaces/hyphens allowed)."); return false; }
        showError("phone", ""); return true;
    }

    function validateAddress() {
        const val = $("#address").val().trim();
        if (val === "") { showError("address", "This field is required."); return false; }
        showError("address", ""); return true;
    }

    function validateCity() {
        const val = $("#city").val().trim();
        if (val === "") { showError("city", "This field is required."); return false; }
        showError("city", ""); return true;
    }

    function validatePostcode() {
        const val = $("#postcode").val().trim();
        if (val === "") { showError("postcode", "This field is required."); return false; }
        if (!postcodePattern.test(val)) { showError("postcode", "Must be a valid UK postcode."); return false; }
        showError("postcode", ""); return true;
    }

    /* ---- blur listeners for real-time feedback ---- */
    $("#email").on("blur", validateEmail);
    $("#first_name").on("blur", validateFirstName);
    $("#last_name").on("blur", validateLastName);
    $("#phone").on("blur", validatePhone);
    $("#address").on("blur", validateAddress);
    $("#city").on("blur", validateCity);
    $("#postcode").on("blur", validatePostcode);

    /* ---- submit ---- */
    $("#registration_form").on("submit", event => {
        const valid = [
            validateEmail(),
            validateFirstName(),
            validateLastName(),
            validatePhone(),
            validateAddress(),
            validateCity(),
            validatePostcode()
        ].every(Boolean);

        if (!valid) event.preventDefault();
    });
});
