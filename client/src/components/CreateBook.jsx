import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault
    axios.post(`${import.meta.env.VITE_API}/book/create`, values)
    .then(res => console.log(res),
        navigate("/")
    )
    .catch(err => console.log(err))
  }
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1>Add a Book</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Publisher:
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Publisher Name"
            name="publisher"
            onChange={(e) =>
              setValues({ ...values, publisher: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Book Name:
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Book Name"
            name="name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date:
          </label>
          <input
            type="date"
            className="form-control"
            name="date"
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
