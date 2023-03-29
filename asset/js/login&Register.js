// Điều hướng sang trang đăng ký
function navigationToRegister() {
    window.location.href = 'caseStudy-register.html'
}

function navigationToLogin() {
    window.location.href = 'caseStudy-Login.html'
}


//check acc
function checkAccount(userName, passWord) {
    for (let i = 0; i < accountArr.length; i++) {
        if (userName === accountArr[i].userName && passWord === accountArr[i].passWord) {
            return true
        }
    }
    return false
}


//Đăng nhập và liên kết tới trang chủ
// let checkAccSucces=[]
// let checkAcc1= true
// checkAccSucces.push(checkAcc1)
// window.localStorage.setItem("checkAccSucces", JSON.stringify(checkAccSucces))//
let checkAccSucces = JSON.parse(window.localStorage.getItem("checkAccSucces")); // nối liên kết để lưu trên Storage


function loginSuccess() {
    // accountArr = JSON.parse(window.localStorage.getItem("accountArr1"));
    let userName = document.getElementById("inputacc").value;
    let passWord = document.getElementById("inputpss").value;
    if (checkAccount(userName, passWord)) {
        alert('Welcome to the website')
        window.location.href = 'caseStudy-Home.html';
        window.localStorage.setItem("checkAccSucces", true)// nối liên kết để lưu trên Storage
    } else {
        alert('The account or password is incorrect, please try again')
    }
}


// Tạo tài khoản để đăng nhập
function registerAccount() {
    let userName = document.getElementById("inputacc1").value;
    let passWord = document.getElementById("inputpss2").value;
    let id = document.getElementById("inputpss0").value;
    let phoneNumber = document.getElementById("inputpss3").value;
    let email = document.getElementById("inputpss4").value;
    let accRegister = new Account(id, userName, passWord, phoneNumber, email)
    let checkNewRegister = true;


    for (let i = 0; i < accountArr.length; i++) {
        if (userName === accountArr[i].userName && passWord === accountArr[i].passWord) {
            checkNewRegister = false;
            alert("This account is already in use, please re-enter");
        }
    }
    if (checkNewRegister === true) {
        accountArr.push(accRegister);
        window.localStorage.setItem("accountArr1", JSON.stringify(accountArr))// nối liên kết để lưu trên Storage
        alert('Congratulations, you have successfully created an account');
        navigationToLogin()
    }
    console.log(accountArr)
}


//
function logOut() {
window.localStorage.setItem("checkAccSucces", false)// nối liên kết để lưu trên Storage
  if (confirm("Do you want to sign out?")){
      window.location.href = 'caseStudy-Home.html';
  }
}




