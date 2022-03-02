const UserName = document.accountform.usersname;
const UserEmail = document.accountform.usersemail;
const UserPassword = document.accountform.userspassword;
const error = document.getElementById('errorsmall');
const error2 = document.getElementById('errorsmall2');
const error3 = document.getElementById('errorsmall3');
const error4 = document.getElementById('errorsmall4');
const malegender = document.getElementById('gmale');
const femalegender = document.getElementById('gfemale');
const malecontainer = document.getElementById('container1');
const femalecontainer = document.getElementById('container2');

const checkUsername = () => {
          if (UserName.value == '') {
                    UserName.style.border = '2px solid red';
                    error.innerHTML = 'UserName is required';
                    error.style = 'color:red ; font-size: 10px;';
                    UserName.focus();
                    return false;
          } else {
                    UserName.style.border = '2px solid green';
                    error.innerHTML = ' ';
          }
};

const checkUserEmail = () => {
          const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
          if (UserEmail.value == '') {
                    UserEmail.style.border = '2px solid red';
                    error2.innerHTML = 'UserEmail is required';
                    error2.style = 'color:red ; font-size: 10px;';
                    UserEmail.focus();
          } else if (!UserEmail.value.match(mailformat)) {
                    UserEmail.style.border = '2px solid red';
                    error2.innerHTML = 'UserEmail Entered is incorrect';
                    error2.style = 'color:red ; font-size: 10px;';
                    UserEmail.focus();
          } else {
                    UserEmail.style.border = '2px solid green';
                    error2.innerHTML = ' ';
          }
          // if (useremail.value.match(email)) {
          //   return true;
          // }
};
const checkUserPassword = () => {
          if (UserPassword.value == '') {
                    UserPassword.style.border = '2px solid red';
                    error4.innerHTML = 'Password  is required';
                    error4.style = 'color:red ; font-size: 10px;';
                    UserEmail.focus();
                    return false;
          }
};
const gendervalidate = () => {
          if (!(malegender) && !(femalegender)){
                    error3.innerHTML = 'Choose a gender';
                    error3.style =
                              'color:red ; font-size: 10px; margin-left: 70%;';
          }
        //   } else if (
        //             malegender.checked == true &&
        //             femalegender.checked == false
        //   ) {
        //             malecontainer.style.backgroundColor = '#a6d608 ';
        //             malecontainer.style.border = ' 1px solid #a6d608 ';
        //   } else if (
        //             femalegender.checked == true &&
        //             malegender.checked == false
        //   ) {
        //             femalecontainer.style.backgroundColor = '#a6d608 ';
        //             femalecontainer.style.border = ' 1px solid #a6d608 ';
        //   }else{
        //     error3.innerHTML = ' ';
        //   }
};

const formElement = document.getElementById('formid');
formElement.addEventListener('submit', (e) => {
          e.preventDefault();
          checkUsername();
          checkUserEmail();
          isValidEmail();
          gendervalidate();
          checkUserPassword();
          //    let isFormValid = checkUsername() && checkUserEmail()
          //       if(!isFormValid){
          //          e.preventDefault();
          //    }
});
const gendersection = document.getElementById('form-control-gender');
gendersection.addEventListener('click', gendervalidate);
