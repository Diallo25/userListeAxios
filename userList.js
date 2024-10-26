import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>Liste des Utilisateurs</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-card">
            {/* Placeholder image pour chaque utilisateur */}
            <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <button>Voir Profil</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
