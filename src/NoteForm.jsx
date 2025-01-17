import { useContext } from "react";
import { NoteContext } from "./NoteProvider";

const NoteForm = () => {
  let data = useContext(NoteContext);
  console.log(data);
  let { state, setState, addTask, task } = data;
  let { title, description, category } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, description, category);
    setState({
      title: "",
      description: "",
      category: "",
    });
  };
  console.log(task);

  return (
    <main className="formBlock">
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-content">
          <label>Description</label>
          <textarea
            name="description"
            cols={50}
            rows={20}
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-content">
          <label>Category</label>
          <select name="category" value={category} onChange={handleChange}>
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="Technical">Technical</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </main>
  );
};

export default NoteForm;