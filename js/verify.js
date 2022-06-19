let VerifyButton = document.getElementById('form');
let VerifyInput = document.getElementById('otp');
let numValue = VerifyInput.value;
function verify() {
    window.location.href = "../index.html";
}
VerifyInput.onblur = function() {
    if(VerifyInput.validity.valid === true) {
axios.put('https://api-dev.zumrafood.com/auth/otp-verify',{
    otp:numValue,
})
.then (response => {
    console.log(response);
    if (response.status === 200) {
        console.log(response.data);
    }
})
.catch(err => {
    if (err.response.status === 400) {
        console.log(err.response.data);
    }
    console.log(VerifyInput.value);
})
if (VerifyInput.value === "")  {
    VerifyButton.addEventListener("click", verify);
    console.log("true");
    }else{
        console.log("false");
    }}}
