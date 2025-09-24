const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Fetching all users
export async function getUsers() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

// Creating new user
export async function createUser(user) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error("Failed to create user");
    return await res.json();
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
}

// Updating user
export async function updateUser(id, user) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error("Failed to update user");
    return await res.json();
  } catch (err) {
    console.error("Error updating user:", err);
    throw err;
  }
}

// Deleting user
export async function deleteUser(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete user");
    return true;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw err;
  }
}
