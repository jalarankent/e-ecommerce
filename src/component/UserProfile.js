import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user/profile')  // Fetch user profile from user management microservice
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
