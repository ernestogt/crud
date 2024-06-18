import './tile.css';

export const Tile = ({ user, setSelectedUser }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">

      </p>
      <p className="tile " onClick={() => {
        setSelectedUser(user)
        console.log(user)
      }}>
        {user.Nombre} {user.Apellido}</p>


    </div >
  );
};