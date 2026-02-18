import { useEffect, useState } from "react";
import "./API.css";

export default function API() {
  const [usersData, setUsersData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });

  // FETCH DATA
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsersData(data.users);
  }

  // HANDLE INPUT CHANGE
  function handleChange(e) {
    setFormData({...formData,[e.target.name]: e.target.value });
  }

  // ADD OR UPDATE DATA
  async function handleAddOrUpdate() {
    if (editId === null) {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const newUser = await res.json();
      setUsersData([...usersData, newUser]);
    } else {
      //UPDATE DATA
      const res = await fetch(`https://dummyjson.com/users/${editId}`,{
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
      const updatedUser = await res.json();
      setUsersData(
        usersData.map((u) => (u.id === editId ? updatedUser : u))
      );
      setEditId(null);
    }

    setFormData({ firstName: "", lastName: "", age: ""});
  }

  // DELETE DATA
  async function handleDelete(id) {
    await fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE"
    });
    setUsersData(usersData.filter((u) => u.id !== id));
  }

  // LOAD DATA INTO FORM (UPDATE)
  function handleEdit(user) {
    setEditId(user.id);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    });
  }

  return (
    <div>
      <h1>Fetch data from API</h1>

      {/* FORM */}
      <div className="form">
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <button
          className={`btn ${editId ? "update-btn" : "add-btn"}`}
          onClick={handleAddOrUpdate}
        >
          {editId ? "UPDATE DATA" : "ADD DATA"}
        </button>
      </div>

      {/* TABLE HEADER */}
      <ul className="user-list user-list-head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
        <li>Actions</li>
      </ul>

      {/* TABLE ROWS */}
      {usersData.map((user) => (
        <ul className="user-list" key={user.id}>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
          <li className="actions">
            <button
              className="btn update-btn"
              onClick={() => handleEdit(user)}
            >
              UPDATE
            </button>
            <button
              className="btn delete-btn"
              onClick={() => handleDelete(user.id)}
            >
              DELETE
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
