import React, { useState, useEffect } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from backend (replace with actual API call)
    const fetchUsers = async () => {
      // Mock data
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone:'9897674539',address:'',role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com',phone:'8857674539',address:'', role: 'User' }
      ];
      setUsers(mockUsers);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
