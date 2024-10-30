import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-blue-300 shadow-md rounded-lg p-4">
      <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} className="rounded-full mb-4" />
      <h2 className="text-lg font-bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p>{`${user.location.street.number} ${user.location.street.name}, ${user.location.country}`}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
