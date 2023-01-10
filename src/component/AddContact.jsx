import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contact = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find((contact) => contact.email === email);
    const checkNumber = contact.find(
      (contact) => contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please Fill in all fields");
    }
    if (checkEmail) {
      return toast.error("This email already exist");
    }
    if (checkNumber) {
      return toast.error("This number already exist");
    }
    const data = {
      id: contact[contact.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Student added successfully");
    history.push("/");
  };
  return (
    <Container>
      <Row>
        <h1 className="my-5 text-center display-3">Add Student</h1>

        <Col md={6} className="mx-auto shadow-lg p-5 text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="mb-3"
                type="number"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button variant="dark" className="btn-block" type="submit">
                Add Student
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
