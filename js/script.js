let button = document.getElementById('button');
let input = document.getElementById('mobile');
// make a parameter for the phone number 
function site() {
    window.location.href = "../verify.html";
}
input.onblur = function() {
    if (input.validity.valid === true) {
            button.addEventListener("click", site);
            console.log("true");
            axios.put('https://api-dev.zumrafood.com/auth/otp-request',{
    mobile: input.value
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
    console.log(input.value);
})
    }else{
        console.log("false");
    }}
