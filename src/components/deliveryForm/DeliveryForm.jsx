import React from "react";

import { useSelector } from "react-redux";
import { getOrderedGoods } from "../../redux/goodsSlice";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const DeliveryForm = () => {
  const orderedGoods = useSelector(getOrderedGoods);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("ordered goods: ", orderedGoods);
      console.log("delivery for: ", JSON.stringify(values, null, 2));

      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        tel: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        age: Yup.number()
          .min(18, "You must be 18+")
          .max(150, "Are you really so old?")
          .required("Required"),
        address: Yup.string()
          .min(6, "Input valid address")
          .max(66, "Must be 66 characters or less")
          .required("Required"),
        tel: Yup.number()
          .min(6, "Input valid telephone number")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="First Name"
        />

        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Last Name"
        />

        <TextInput label="Age" name="age" type="number" placeholder="Age" />

        <TextInput
          label="Address"
          name="address"
          type="text"
          placeholder="Address"
        />

        <TextInput
          label="Telephone number"
          name="tel"
          type="number"
          placeholder="Telephone"
        />

        <button type="submit">Checkout</button>
      </Form>
    </Formik>
  );
};

export default DeliveryForm;
