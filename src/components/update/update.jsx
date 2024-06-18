import { useEffect, useState } from "react";
import { Tile } from "../tileContainer/tile";
import "./styles.css";
import UserForm from "../userForm/userForm";
import { updateUser } from "../../util/api";

const UpdateUser = ({ data, fetchData }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [update, setUpdate] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [nacimiento, setNacimiento] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        if (selectedUser) {
            setNombre(selectedUser.Nombre);
            setApellido(selectedUser.Apellido);
            setEmail(selectedUser.Email);
            setNacimiento(selectedUser["Fecha Nacimiento"]);
        }
    }, [selectedUser]);

    return (
        <div className="home-container"> {/* Use the CSS class names */}
            <div className="user-list">
                <h1>Update Page</h1>
                {data && (
                    <ul className="user-list-items">
                        {data.map((user) => (
                            <Tile key={user.id} user={user} setSelectedUser={setSelectedUser} />
                        ))}
                    </ul>
                )}
            </div>

            <div className="user-details">
                {selectedUser && (
                    <div>
                        <h2>User Details</h2>
                        <p><strong>Nombre:</strong> {selectedUser.Nombre}</p>
                        <p><strong>Apellido:</strong> {selectedUser.Apellido}</p>
                        <p><strong>Email:</strong> {selectedUser.Email}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {selectedUser["Fecha Nacimiento"]}</p>
                        <button onClick={() => setUpdate(!update)}>Update User</button>
                    </div>
                )}
                {update && (
                    <UserForm
                        handleSubmit={updateUser(selectedUser.id, nombre, apellido, email, nacimiento)}
                        nombre={nombre}
                        apellido={apellido}
                        email={email}
                        nacimiento={nacimiento}
                        setNombre={setNombre}
                        setApellido={setApellido}
                        setEmail={setEmail}
                        setNacimiento={setNacimiento}
                    />
                )}
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default UpdateUser;
