import { CrudDisplay } from "./CrudDisplay";
import { CrudHook } from "./CrudHook";

export const Crudform = () => {
  const {
    handleOpenModal,
    showModal,
    handleCloseModal,
    handleSubmit,
    titleInput,
    textboxInput,
    getTask,
    deletehandler,
    handleUpdate,
    selectedTask,
  } = CrudHook();
  return (
    <div className="wrapper">
      <div className="addctn">
        <button onClick={handleOpenModal} className="walana">
          <img src="added.png" alt="wala" />
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-top">
              <label>Todo Form</label>
              <span className="close-button" onClick={handleCloseModal}>
                X
              </span>
            </div>
            <form onSubmit={handleSubmit} className="forms">
              <input
                type="text"
                name="name"
                placeholder="Enter a Title"
                required
                ref={titleInput}
                defaultValue={selectedTask ? selectedTask.title : ""}
                className="titleform"
              />
              <textarea
                defaultValue={selectedTask ? selectedTask.description : ""}
                ref={textboxInput}
                required
              ></textarea>

              <button type="submit">
                {selectedTask ? "Update" : "Add Todo"}
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="grid-cards">
        {getTask.map((tasked) => {
          return (
            <CrudDisplay
              key={tasked.id}
              id={tasked.id}
              title={tasked.title}
              description={tasked.description}
              deletehandler={deletehandler}
              handleUpdate={() => handleUpdate(tasked)}
            />
          );
        })}
      </div>
    </div>
  );
};
