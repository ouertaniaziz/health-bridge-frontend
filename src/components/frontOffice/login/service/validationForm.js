export function validateName(value) {
  let error;
  const nameRegex = /^[a-zA-Z ]+$/; // Matches letters and spaces only
  if (!value) {
    error = 'Name is required';
  } else if (!nameRegex.test(value)) {
    error = 'Invalid name. Must contain only letters and spaces';
  }
  return error;
}

// check condition
export function validateEmail(email) {
  // Regex pattern for validating email
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let error;

  if (!email) {
    error = 'Email is required';
  } else if (!pattern.test(email)) {
    error = 'Invalid email format';
  }

  return error;
}
export function validatePassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  let error;

  if (!password) {
    error = 'Password is required';
  } else if (!pattern.test(password)) {
    error =
      'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&*)';
  }

  return error;
}
export function validateSecondePassword(password, confirmPassword) {
  let error;

  if (!confirmPassword) {
    error = 'Confirm password is required';
  } else if (password !== confirmPassword) {
    error = 'Passwords do not match';
  }

  return error;
}
export function validateStreetAddress(value) {
  let error;
  const addressRegex = /^[a-zA-Z0-9\s,'-]*$/; // Matches letters, digits, spaces, commas, apostrophes, and hyphens only
  if (!value) {
    error = 'Street address is required';
  } else if (!addressRegex.test(value)) {
    error =
      'Invalid street address. Must contain only letters, digits, spaces, commas, apostrophes, and hyphens';
  }
  return error;
}

export function validateCity(value) {
  let error;
  const cityRegex = /^[a-zA-Z\s]*$/; // Matches letters and spaces only
  if (!value) {
    error = 'City is required';
  } else if (!cityRegex.test(value)) {
    error = 'Invalid city. Must contain only letters and spaces';
  }
  return error;
}
export function validateStateProvince(value) {
  let error;
  const stateProvinceRegex = /^[a-zA-Z\s]*$/; // Matches letters and spaces only
  if (!value) {
    error = 'State/province is required';
  } else if (!stateProvinceRegex.test(value)) {
    error = 'Invalid state/province. Must contain only letters and spaces';
  }
  return error;
}
export function validatePostalCode(value) {
  let error;
  const postalCodeRegex = /^[1-9][0-9]{3}$/; // Matches a 4-digit number starting with a non-zero digit
  if (!value) {
    error = 'Postal code is required';
  } else if (!postalCodeRegex.test(value)) {
    error =
      'Invalid postal code. Must be a 4-digit number starting with a non-zero digit';
  }
  return error;
}

export function validateNumber(value) {
  let error;
  if (!value) {
    error = 'email';
  } else if (value.toLowerCase() !== 'aziz') {
    error = 'your name should be aziz';
  }
  return error;
}
export function validatePhone(value) {
  let error;
  const phoneRegex = /^\d{8}$/; // Matches a 10-digit phone number
  if (!value) {
    error = 'Phone number is required';
  } else if (!phoneRegex.test(value)) {
    error = 'Invalid phone number. Must be a 8-digit number';
  }
  return error;
}
