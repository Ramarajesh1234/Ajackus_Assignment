export function validateUser(user) {
  const errors = {};

  if (!user.firstName || user.firstName.trim() === "") {
    errors.firstName = "First name is required";
  }

  if (!user.lastName || user.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  }

  if (!user.email || user.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = "Email is not valid";
  }

  if (!user.department || user.department.trim() === "") {
    errors.department = "Department is required";
  }

  return errors;
}
