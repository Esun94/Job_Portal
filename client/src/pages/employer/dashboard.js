import React from 'react';
import Auth from '../../utils/auth';

const EmployerDashboard = () => {
    const profile = Auth.getProfile();
    console.log(profile);

  return (
    <>
      <h1>Welcome, {profile.data.name}</h1>
    </>
  );
};

export default EmployerDashboard;
