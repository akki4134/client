import React from "react";
import { Button, Grid } from "@mui/joy";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <>
      <Grid container mt={10} alignContent="center" justifyContent="center">
        <Grid mb={10}>
          <ContactForm />
        </Grid>
        <Button
          sx={{
            height: 80,
            width: 80,
            borderRadius: 80,
          }}
          variant="outlined"
        >
          Instagram
        </Button>
        <Button
          sx={{
            height: 200,
            width: 200,
            borderRadius: 200,
          }}
          variant="outlined"
        >
          Email
        </Button>
        <Button
          sx={{
            height: 140,
            width: 140,
            borderRadius: 140,
          }}
          variant="outlined"
        >
          Youtube
        </Button>
        <Button
          sx={{
            height: 180,
            width: 180,
            borderRadius: 180,
          }}
          variant="outlined"
        >
          Contact Number
        </Button>
        <Button
          sx={{
            height: 150,
            width: 150,
            borderRadius: 150,
          }}
          variant="outlined"
        >
          Linkedin
        </Button>
      </Grid>
      <Footer />
    </>
  );
}
