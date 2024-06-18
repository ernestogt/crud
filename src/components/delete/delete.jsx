// UserListWithDelete.js

import { useState } from 'react';
import { deleteUser } from '../../util/api';

const DeleteUser = ({ users, fetchData }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setMessage('User deleted successfully!');
            setSelectedUser(null);
            fetchData();
        } catch (error) {
            setMessage('Error deleting user: ' + error.message);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <h1>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleUserClick(user)}>
                            {user.Nombre} {user.Apellido}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ flex: 1 }}>
                {selectedUser && (
                    <div>
                        <h2>User Details</h2>
                        <p><strong>Nombre:</strong> {selectedUser.Nombre}</p>
                        <p><strong>Apellido:</strong> {selectedUser.Apellido}</p>
                        <p><strong>Email:</strong> {selectedUser.Email}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {selectedUser["Fecha Nacimiento"]}</p>
                        <button onClick={() => handleDelete(selectedUser.id)}>Delete User</button>
                        {message && <p>{message}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteUser;
