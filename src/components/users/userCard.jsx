export const UserCard = ({ user, onDelete }) => {
  return (
    <div className="card h-100 shadow">
      <div className="photo">
        <img
        src={user.image}
        className="card-img-top"
        alt={`${user.firstName} ${user.lastName}`}
      />
      </div>
      
      <div className="card-body">
        <h5 className="card-title">
          {user.firstName} {user.lastName}
        </h5>
        <p className="card-text">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Gender:</strong> {user.gender}
        </p>
        <p className="card-text">
          <strong>Birth Date:</strong> {user.birthDate}
        </p>
        <p className="card-text">
          <strong>Blood Group:</strong> {user.bloodGroup}
        </p>
        <p className="card-text">
          <strong>Height:</strong> {user.height} cm
        </p>
        <p className="card-text">
          <strong>Weight:</strong> {user.weight} kg
        </p>
        <p className="card-text">
          <strong>Eye Color:</strong> {user.eyeColor}
        </p>
        <p className="card-text">
          <strong>Hair:</strong> {user.hair.color}, {user.hair.type}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {user.address.address}, {user.address.city},{" "}
          {user.address.state}
        </p>
        <p className="card-text">
          <strong>Company:</strong> {user.company.name} - {user.company.title}
        </p>
        <p className="card-text">
          <strong>University:</strong> {user.university}
        </p>
        <p className="card-text">
          <strong>Crypto Wallet:</strong> {user.crypto.wallet} (
          {user.crypto.coin})
        </p>
        <p className="card-text">
          <strong>Role: </strong>{" "}
          <span
            className={
              user.role == "admin"
                ? "text-danger"
                : user.role === "moderator"
                  ? "text-warning"
                  : "text-primary"
            }
          >
            {user.role}
          </span>
        </p>
      </div>
      <div className="card-footer text-muted">ID: {user.id}</div>
      <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
        Delete
      </button>
    </div>
  );
};
