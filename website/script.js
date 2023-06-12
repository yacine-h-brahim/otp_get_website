window.onload = function() {
    var otpValueElement = document.getElementById('otpValue');
    var otp = getOTPFromURL();
    otpValueElement.textContent = otp;

    function getOTPFromURL() {
        var urlParams = new URLSearchParams(window.location.search);
        var otp = urlParams.get('otp');
        return otp;
    }
};
