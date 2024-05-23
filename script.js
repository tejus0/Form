// Create a form element

const form = document.createElement('form');
form.id = 'studentForm';


// Create form fields
const fields = [
  { name: 'Student Name', type: 'text', required: true },
  { name: 'Mobile', type: 'tel', required: true },
  { name: 'OTP', type: 'number', required: true },
  { name: 'Email', type: 'email', required: true },
  { name: 'Date of Birth', type: 'date', required: true },
  { name: 'NEET Score', type: 'number', required: true },
  { name: 'WhatsApp Number', type: 'tel', required: true },
  { name: 'Course Name', type: 'text', required: true },
];

fields.forEach((field) => {
  const fieldElement = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = field.name;
  const input = document.createElement('input');
  input.type = field.type;
  input.required = field.required;
  fieldElement.appendChild(label);
  fieldElement.appendChild(input);
  form.appendChild(fieldElement);
});

// Create OTP input and button
const otpInput = document.createElement('input');
otpInput.type = 'number';
otpInput.required = true;
const otpButton = document.createElement('button');
otpButton.textContent = 'Send OTP';

// Add OTP input and button to the form
const otpField = document.createElement('div');
otpField.appendChild(otpInput);
otpField.appendChild(otpButton);
form.appendChild(otpField);

// Add event listener to the OTP button
otpButton.addEventListener('click', () => {
  // Generate and validate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  const enteredOtp = otpInput.value;

  if (enteredOtp === otp.toString()) {
    alert('OTP is valid');
  } else {
    alert('Invalid OTP');
  }
});

// Append the form to the document body
document.getElementById('form-container').appendChild(form);