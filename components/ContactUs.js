import styles from "styles/ContactUs.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Headings from "./Headings";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Service: "",
    Location: "",
    Message: "",
  });

  const [error, setError] = useState("");

  const handleFormDetails = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitForm = () => {
    const { FirstName, LastName, Email, Phone, Service, Location, Message } =
      form;
    if (
      FirstName === "" ||
      LastName === "" ||
      Email === "" ||
      Phone === "" ||
      Service === "" ||
      Location === "" ||
      Message === ""
    ) {
      setError("Please fill all the mandatory fields marked with (*) ");
    } else {
      console.log(form);
      setForm({
        FirstName: "",
        LastName: "",
        Email: "",
        Phone: "",
        Service: "",
        Location: "",
        Message: "",
      });
    }
  };

  return (
    <div className={styles.radialBorder}>
      <Headings content="Contact Us" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "48%" },
        }}
        className={`${styles.formContainer} ${styles.contactUsForm}`}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            name="FirstName"
            className={styles.input}
            value={form.FirstName}
            onChange={handleFormDetails}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Last Name"
            name="LastName"
            className={styles.input}
            value={form.LastName}
            onChange={handleFormDetails}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="Email"
            value={form.Email}
            className={styles.input}
            onChange={handleFormDetails}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Phone"
            name="Phone"
            value={form.Phone}
            className={styles.input}
            onChange={handleFormDetails}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Service You are looking for"
            name="Service"
            value={form.Service}
            className={styles.input}
            onChange={handleFormDetails}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Location"
            name="Location"
            value={form.Location}
            className={styles.input}
            onChange={handleFormDetails}
          />
        </div>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "98%" },
        }}
        className={styles.formContainer}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Describe Your Needs to us"
            multiline
            rows={4}
            name="Message"
            value={form.Message}
            className={styles.input}
            onChange={handleFormDetails}
          />
        </div>
      </Box>
      <div className={`${styles.formContainer} ${styles.form}`}>
        <span className={styles.error}>{error}</span>
      </div>
      <div className={`${styles.formContainer} ${styles.form}`}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmitForm}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
