import { useState, useRef, useEffect } from "react";
import { CrudContext } from "./CrudContext";
import { Crudform } from "./Crudform";
export const CrudHook = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [getTask, setTask] = useState([]);
  const titleInput = useRef(null);
  const textboxInput = useRef(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const todoTask = selectedTask
      ? {
          ...selectedTask,
          title: titleInput.current.value,
          description: textboxInput.current.value,
        }
      : {
          id: getTask.length === 0 ? 1 : getTask[getTask.length - 1].id + 1,
          title: titleInput.current.value,
          description: textboxInput.current.value,
        };

    if (selectedTask) {
      const updated = getTask.map((task) => {
        if (task.id === selectedTask.id) {
          return todoTask;
        }
        return task;
      });
      setTask(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));
    } else {
      setTask([...getTask, todoTask]);
      localStorage.setItem("tasks", JSON.stringify([...getTask, todoTask]));
    }

    handleCloseModal();
    setSelectedTask(null);
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTask(savedTasks);
  }, []);

  const handleUpdate = (task) => {
    setSelectedTask(task);
    handleOpenModal();
  };

  const deletehandler = (event) => {
    const deleted = getTask.filter((task) => task.id !== event);
    setTask(deleted);
    localStorage.setItem("tasks", JSON.stringify(deleted));
    setShowModal(false);
  };
  const values = {
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
    handleSubmit: handleSubmit,
    deletehandler: deletehandler,
    handleUpdate: handleUpdate,
    selectedTask: selectedTask,
    showModal: showModal,
    titleInput: titleInput,
    textboxInput: textboxInput,
    getTask: getTask,
  };
  return (
    <CrudContext.Provider value={values}>
      <Crudform />
    </CrudContext.Provider>
  );
};
