import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import FormError from "../../../common/FormError";
import useAxios from "../../../../hooks/useAxios";

const schema = yup.object().shape({
  hotel: yup.boolean(),
  bed_and_breakfast: yup.boolean(),
  guesthouse: yup.boolean(),
  parking_available: yup.boolean(),
  breakfast_included: yup.boolean(),
  restaurant: yup.boolean(),
  pet_friendly: yup.boolean(),
  bar: yup.boolean(),
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
});

export default function AddEstab() {
  const [adding, setAdding] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const http = useAxios();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setAdding(true);
    setError(null);

    const formData = new FormData();
    formData.append("files.image", data.files[0]);
    data.status = "publish";
    console.log(data);

    try {
      const response = await http.post("establishments", formData);
      console.log("response", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setError(error.toString());
    } finally {
      setAdding(false);
    }
  }

  return (
    <>
      {submitted && (
        <Alert variant="success">Establishment successfully added.</Alert>
      )}
      {error && <FormError>{error}</FormError>}
      <Form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.File name="files" label="Add image" {...register("files")} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Establishment type</Form.Label>
          <Form.Check
            type="checkbox"
            label="Hotel"
            name="hotel"
            ref={register}
          />
          <Form.Check
            type="checkbox"
            label="Bed & Breakfast"
            name="bed_and_breakfast"
            ref={register}
          />
          <Form.Check
            type="checkbox"
            label="Guesthouse"
            name="guesthouse"
            ref={register}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Special features</Form.Label>
          <Form.Check
            type="checkbox"
            label="Parking Available"
            name="parking_available"
            ref={register}
          />
          <Form.Check
            type="checkbox"
            label="Breakfast Included"
            name="breakfast_included"
            ref={register}
          />
          <Form.Check
            type="checkbox"
            label="Restaurant"
            name="restaurant"
            ref={register}
          />
          <Form.Check
            type="checkbox"
            label="Pet-friendly"
            name="pet_friendly"
            ref={register}
          />
          <Form.Check type="checkbox" label="Bar" name="bar" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Establishment title</Form.Label>
          <Form.Control
            name="name"
            placeholder="Establishment title.."
            ref={register}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price per night</Form.Label>
          <Form.Control name="price" placeholder="Price.." ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            placeholder="Description.."
            ref={register}
          />
        </Form.Group>

        <button>{adding ? "Adding..." : "Add new establishment"}</button>
      </Form>
    </>
  );
}
