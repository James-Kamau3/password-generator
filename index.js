const input = document.getElementById("input-field"); //grab input field
const button = document.getElementById("btn"); // grab btn
const copyBtn = document.getElementById("btn-copy");

//Function to generate random password
function genPass(passLen) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; //def characters
  let password = ""; //initialise pass

  //loop
  for (let i = 0; i < passLen; i++) {
    const randChars = Math.floor(Math.random() * (chars.length + 1));
    password += chars[randChars];
  }
  return password;
}

//Set the password length
const dispOnclick = () => {
  const randPass = genPass(16);
  input.value = randPass;
};

// Event listener that displays password onclicking
button.addEventListener("click", dispOnclick);

//copy text
const copy = async () => {
  try {
    await navigator.clipboard.writeText(input.value);
    alert('Password copied to clipboard!')
  } catch (error) {
    console.log("Failed to copy", error);
  }
};

copyBtn.addEventListener("click", copy);
