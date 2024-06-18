import { useEffect, useState } from "react";
import { fetchData } from "../../util/api";
import { Tile } from "../tileContainer/tile";
import "./home.css"; // Import the CSS file

const Home = ({ data, fetchData }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="home-container"> {/* Use the CSS class names */}
            <div className="user-list">
                <h1>Home Page</h1>
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
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
