import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);



  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/book`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=>{
    axios.delete(`${import.meta.env.VITE_API}/book/delete/${id}`)
    .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5">
      <Link className="btn btn-success" to="/create">Create Book</Link>
      {books.length ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Publisher</th>
              <th scope="col">Book Name</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book,index) => {
              return (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.publisher}</td>
                  <td>{book.name}</td>
                  <td>{book.date}</td>
                  <td>
                    <Link to={`/update/${book.id}`} className="btn btn-info btn-sm me-2" type="button">Update</Link>
                    <button onClick={()=>handleDelete(book.id)} className="btn btn-danger btn-sm" type="button">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center">No records found</h2>
      )}
    </div>
  );
};

export default Books;
