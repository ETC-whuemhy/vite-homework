import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './component/UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);
      
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center bg-slate-200">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-slate-200">
      <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
