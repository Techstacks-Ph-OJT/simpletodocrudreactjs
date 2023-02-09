import { useState, useRef } from "react";
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
      setTask(
        getTask.map((task) => {
          if (task.id === selectedTask.id) {
            return todoTask;
          }
          return task;
        })
      );
    } else {
      setTask([...getTask, todoTask]);
    }

    handleCloseModal();
    setSelectedTask(null);
  };
  const handleUpdate = (task) => {
    setSelectedTask(task);
    handleOpenModal();
  };

  const deletehandler = (event) => {
    console.log(event);
    setTask(getTask.filter((task) => task.id !== event));
    setShowModal(false);
  };
  return {
    handleOpenModal,
    handleCloseModal,
    handleSubmit,
    deletehandler,
    handleUpdate,
    selectedTask,
    showModal,
    titleInput,
    textboxInput,
    getTask,
  };
};
