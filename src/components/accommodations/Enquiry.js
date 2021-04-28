import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import Heading from "../common/Heading";
import FormError from "../common/FormError";
import { BASE_URL } from "../../constants/api";
import { MINIMUM_NAME_CHARACTERS } from "../../constants/form";

const schema = yup.object().shape({
  full_name: yup
    .string()
    .required("Please enter your full name")
    .min(
      MINIMUM_NAME_CHARACTERS,
      `Your full name must be at least ${MINIMUM_NAME_CHARACTERS} characters`
    ),
  email_address: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  check_in: yup.string().required("Please provide a check-in date"),
  check_out: yup.string().required("Please provide a check-out date"),
});

export default function Enquiry(props) {
  const [submitting, setSubmitting] = useState(false);

  const url = BASE_URL + "enquiries/";
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/");
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Modal animation={false} show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Heading size="1" content="Book Your Stay" />
          <Heading
            size="2"
            content="Fill out the form to complete your booking"
          />
        </Modal.Header>
        {submitting && (
          <Alert variant="success">
            Your booking was successful. You will receive a booking confirmation
            within 24 hours. Thank you for choosing us!
          </Alert>
        )}
        <Form className="enquiry-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              name="full_name"
              placeholder="Full name"
              ref={register}
            />
            {errors.full_name && (
              <FormError>{errors.full_name.message}</FormError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email_address"
              placeholder="Email address"
              ref={register}
            />
            {errors.email_address && (
              <FormError>{errors.email_address.message}</FormError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Check-in</Form.Label>
            <Form.Control name="check_in" type="date" ref={register} />
            {errors.check_in && (
              <FormError>{errors.check_in.message}</FormError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Check-out</Form.Label>
            <Form.Control name="check_out" type="date" ref={register} />
            {errors.check_out && (
              <FormError>{errors.check_out.message}</FormError>
            )}
          </Form.Group>

          <button type="submit">Submit</button>
        </Form>
      </Modal>
    </>
  );
}
