import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOrderedGoods } from "../../redux/goodsSlice";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { createUseStyles } from "react-jss";
import { logOrder } from "../../redux/orderSlice";

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
  },

  error: { color: "red" },
});

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const styles = useStyles();

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

const DeliveryForm = () => {
  const dispatch = useDispatch();

  const orderedGoods = useSelector(getOrderedGoods);

  const styles = useStyles();

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
      onSubmit={(values) => {
        dispatch(
          logOrder({ customerData: values, orderedGoods: orderedGoods })
        );
      }}
    >
      <Form className={styles.form}>
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
