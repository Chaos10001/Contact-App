import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const contact = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contacted Deleted Successfully!");
  };
  return (
    <Container>
      <Row>
        <Col md={12} className="text-end my-5">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </Col>
        <Col md={10} className="mx-auto">
          <table className="table table-hover">
            <thead className="text-white-bg-dark-text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name:</th>
                <th scope="col">Email: </th>
                <th scope="col">Number: </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((contacts, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contacts.name}</td>
                  <td>{contacts.email}</td>
                  <td>{contacts.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contacts.id}`}
                      className="btn btn-small btn-primary me-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteContact(contacts.id)}
                      className="btn btn-small btn-danger"
                      type="button">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
