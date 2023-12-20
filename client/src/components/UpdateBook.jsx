import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_API}/book/update/${id}`, values)
      .then((res) => console.log(res), navigate("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/book/getrecord/${id}`)
      .then((res) =>
        setValues({
          ...values,
          publisher: res.data[0].publisher,
          name: res.data[0].name,
          date: res.data[0].date,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1>Update Book</h1>
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
            value={values.publisher}
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
            value={values.name}
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
            value={values.date}
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

export default UpdateBook;
