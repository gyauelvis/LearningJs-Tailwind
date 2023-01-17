const formVerification = () => {
  let emailRegex = /.+@.+.\..+/;
  let digitRegex = /[0-9]/;
  let smallLetterRegex = /[a-z]/;
  let capsRegex = /[A-Z]/;
  let symbolRegex = /[!@#$%^&*(),.?":{}|_<>]/;
  let getPasswordValue = document.querySelector("input[type='password']").value;
  let passwordHelp = document.querySelector(".passwordHelp");
  console.log(digitRegex.test(getPasswordValue));
  console.log(smallLetterRegex.test(getPasswordValue));
  console.log(capsRegex.test(getPasswordValue));
  console.log(symbolRegex.test(getPasswordValue));

  if (
    digitRegex.test(getPasswordValue) &&
    smallLetterRegex.test(getPasswordValue) &&
    capsRegex.test(getPasswordValue) &&
    symbolRegex.test(getPasswordValue)
  ) {
    passwordHelp.style.display = "none";
  } else {
    passwordHelp.style.display = "block";
  }
};
document.querySelector(".submit").addEventListener("click", formVerification);
