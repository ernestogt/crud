const UserForm = ({ nombre, apellido, nacimiento, email, setNombre, setApellido, setEmail, setNacimiento, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Nombre:</label>
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={nombre}
                        required
                        onChange={(e) => setNombre(e.target.value)}
                        style={styles.input}
                    />
                    <button type="button" onClick={() => setNombre('')} style={styles.clearButton}>X</button>
                </div>
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="apellido" style={styles.label}>Apellido:</label>
                <div style={styles.inputWrapper}>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={apellido}
                        required
                        onChange={(e) => setApellido(e.target.value)}
                        style={styles.input}
                    />
                    <button type="button" onClick={() => setApellido('')} style={styles.clearButton}>X</button>
                </div>
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email:</label>
                <div style={styles.inputWrapper}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <button type="button" onClick={() => setEmail('')} style={styles.clearButton}>X</button>
                </div>
            </div>
            <div style={styles.formGroup}>
                <label htmlFor="nacimiento" style={styles.label}>Fecha de Nacimiento:</label>
                <div style={styles.inputWrapper}>
                    <input
                        type="date"
                        id="nacimiento"
                        name="nacimiento"
                        value={nacimiento}
                        required
                        onChange={(e) => setNacimiento(e.target.value)}
                        style={styles.input}
                    />
                    <button type="button" onClick={() => setNacimiento('')} style={styles.clearButton}>X</button>
                </div>
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    )
}

const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#333',
        color: '#fff',
        marginTop: '10px solid #555'
    },
    formGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        flex: '1',
        padding: '8px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #555',
        marginRight: '5px',
        backgroundColor: '#555',
        color: '#fff'
    },
    clearButton: {
        padding: '8px',
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    button: {
        display: 'block',
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default UserForm;
