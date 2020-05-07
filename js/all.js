var signupform = document.querySelector('.signup');
signupform.addEventListener('submit',signup,false);
var signinform = document.querySelector('.signin');
signinform.addEventListener('submit',signin,false);

function signup(e){
    e.preventDefault();
    var emailtStr = document.querySelector('.signup-account');
    var passwordStr = document.querySelector('.signup-password');
    var account = {};
    account.email = emailtStr.value;
    account.password = emailtStr.value;
    var xhrpost = new XMLHttpRequest();
    xhrpost.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhrpost.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhrpost.send(data);
    xhrpost.onload = function (){
        var callbackdata = JSON.parse(xhrpost.responseText);
        console.log(callbackdata);
        if (callbackdata.message == "帳號註冊成功"){
            alert('註冊成功！');
        }else{
            alert('註冊失敗！');
        }
    }
    emailtStr.value = '';
    passwordStr.value = '';
}

function signin(e){
    e.preventDefault();
    var emailStr = document.querySelector('.signin-account');
    var passwordStr = document.querySelector('.signin-password');
    var account = {};
    account.email = emailStr.value;
    account.password = passwordStr.value;
    var xhrpost = new XMLHttpRequest();
    xhrpost.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhrpost.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhrpost.send(data);
    xhrpost.onload = function (){
        var callbackdata = JSON.parse(xhrpost.responseText);
        console.log(callbackdata);
        if (callbackdata.message == "登入成功"){
            alert('登入成功！');
        }else{
            alert('登入失敗！');
        }
    }
    emailStr.value = '';
    passwordStr.value = '';
}