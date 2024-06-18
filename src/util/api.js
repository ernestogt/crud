export const API_URL = 'https://retoolapi.dev/5tbMX0/data';

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
    }
    return response.json();
};

const handleError = (error) => {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
};

export const fetchData = async () => {
    try {
        const response = await fetch(API_URL);
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const createUser = async (nombre, apellido, email, nacimiento) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Email: email,
                Nombre: nombre,
                Apellido: apellido,
                "Fecha Nacimiento": nacimiento


            })
        });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const createUserAux = async (id, nombre, apellido, email, nacimiento) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                id: id,
                Email: email,
                Nombre: nombre,
                Apellido: apellido,
                "Fecha Nacimiento": nacimiento


            })
        });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        return handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};



export const updateUser = async (id, nombre, apellido, email, nacimiento) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            Email: email,
            Nombre: nombre,
            Apellido: apellido,
            "Fecha de Nacimiento": nacimiento,
        })
    });
    const data = await response.json();
    return data;
}