"use client";

import { useEffect, useState } from 'react';

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-700 text-3xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-around">
      {users.map((user, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white p-4">
          <img className="w-full h-64 object-cover rounded" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-gray-800">{`${user.name.first} ${user.name.last}`}</div>
            <p className="text-gray-600 text-base">{user.email}</p>
            <p className="text-gray-600 text-base">{user.location.country}</p>
            <p className="text-gray-600 text-base">{user.gender}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
