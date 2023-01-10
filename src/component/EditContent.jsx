import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const EditContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();
  const contact = useSelector((state) => state);

  const currentContact = contact.find(
    (contacts) => contacts.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contact.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student Updated successfully");
    history.push("/");
  };
  return (
    <Container>
      {currentContact ? (
        <>
          <Row>
            <h1 className="my-5 text-center display-3">Edit Student {id}</h1>

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
                    Update Student
                  </Button>
                  <Button
                    className="ms-3"
                    as={Link}
                    to="/"
                    variant="danger"
                    type="submit">
                    Cancel
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </>
      ) : (
        <h1 className="display-3 my-5 text-ceter">
          Student contact with id {id} does not exists
        </h1>
      )}
    </Container>
  );
};

export default EditContent;
