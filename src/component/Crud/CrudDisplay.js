export const CrudDisplay = (props) => {
  return (
    <div key={props.id} className="card" id={props.id}>
      <div className="card-top">
        <img src="saved.png" alt="wala" className="bookmark" />
        <label>{props.title}</label>
      </div>
      <div className="content-btn">
        <p>{props.description}</p>
        <button onClick={props.handleUpdate} className="delete">
          <img src="write.png" alt="wala" />
        </button>
        <button
          onClick={() => props.deletehandler(props.id)}
          className="delete"
        >
          <img src="trash.png" alt="wala" />
        </button>
      </div>
    </div>
  );
};
