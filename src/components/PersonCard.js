
export default function PersonCard ({name, email, avatar, description}) {

  return (
    <div className="card">
      <img src={avatar} alt="person"/>
      <div className="card-container">
        <h3>{name}</h3>
        <h5>{description}</h5>
      </div>
    </div>
  );
}


