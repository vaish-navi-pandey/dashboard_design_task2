import React from 'react';
import './CustomStyles.css';

function UserInfo() {
  // Placeholder user data
  const userData = {
    username: 'admin',
    email: 'admin@example.com',
    name: 'John Doe',
    institution: 'Example University',
    designation: 'Admin',
    phoneNumber: '123-456-7890',
    leaderName: 'Jane Smith',
    leaderContact: '987-654-3210',
  };

  return (
    <div className="user-info mt-4">
      <h2>User Information</h2>
      <ul className="list-unstyled">
        <li><strong>Username:</strong> {userData.username}</li>
        <li><strong>Email:</strong> {userData.email}</li>
        <li>Name: {userData.name}</li>
        <li>Institution: {userData.institution}</li>
        <li>Designation: {userData.designation}</li>
        <li>Phone Number: {userData.phoneNumber}</li>
        <li>Leader Name: {userData.leaderName}</li>
        <li>Leader Contact: {userData.leaderContact}</li>
      </ul>
    </div>
  );
}

export default UserInfo;