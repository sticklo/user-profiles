import "./App.css";

const Card = (data) => {
  return (
    <>
      <div className="top">
        <h1 className="title">{data.data.name}</h1>
        <p className="bio">{data.data.company.bs}</p>
      </div>

      <div className="btm">
        <h2 className="btm-title">General Info</h2>
        <div className="info">
          <span className="desc">
            <strong>Username</strong>
            <p>{data.data.username}</p>
          </span>
          <span className="desc">
            <strong>Address</strong>
            <p>
              {data.data.address.suite} {data.data.address.street},{" "}
              {data.data.address.city}
            </p>
          </span>
          <span className="desc">
            <strong>E-mail</strong>
            <p>{data.data.email}</p>
          </span>
          <span className="desc">
            <strong>Phone</strong>
            <p>{data.data.phone}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;