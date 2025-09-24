import React, { useState, useEffect } from "react";
import { validateUser } from "../utils/validators";

const UserForm = ({ initialData = null, onCancel, onSave }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setForm({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        department: initialData.department || "",
      });
      setErrors({});
    } else {
      setForm({ firstName: "", lastName: "", email: "", department: "" });
      setErrors({});
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validateUser(form);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      onSave({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        department: form.department.trim(),
      });
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{initialData ? "Edit user" : "Add user"}</h3>
        <form className="user-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="form-row">
            <label>Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>

          <div className="form-row">
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-row">
            <label>Department</label>
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
            />
            {errors.department && (
              <div className="error">{errors.department}</div>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">{initialData ? "Save" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
