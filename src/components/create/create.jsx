import { useState } from 'react';
import { createUser, createUserAux } from '../../util/api';
import UserForm from '../userForm/userForm';

const CreateUser = ({ fetchData }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [nacimiento, setNacimiento] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(nombre, apellido, email, nacimiento);
            setMessage('User created successfully!');
            setNombre('');
            setApellido('');
            setEmail('');
            setNacimiento('');
            fetchData();
        } catch (error) {
            setMessage('Error creating user: ' + error.message);
        }
    };

    return (
        <div>
            <UserForm
                handleSubmit={handleSubmit}
                nombre={nombre}
                apellido={apellido}
                email={email}
                nacimiento={nacimiento}
                setNombre={setNombre}
                setApellido={setApellido}
                setEmail={setEmail}
                setNacimiento={setNacimiento}
            />
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateUser;
