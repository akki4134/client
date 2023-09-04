import { Grid, Typography } from "@mui/joy";
import React from "react";
import dashboard from "../Images/dashboard.png";

function Features() {
  return (
    <Grid container mt={10} alignItems="center" justifyContent="center">
      <Grid xs={12} md={6}>
        <Typography m={2} mt={5} color="primary" fontSize="lg" fontWeight="lg">
          You name it we make it
        </Typography>
        <Typography
          m={2}
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Web Applications, Dashboards, Customer Relation Manager,
        </Typography>
        <Typography
          m={2}
          mt={4}
          fontSize="lg"
          textColor="text.secondary"
          lineHeight="lg"
        >
          One Stop Software for all your Web Application, Hosting, SEO, Digital
          Marketing & Software Needs.
        </Typography>
      </Grid>
      <Grid xs={12} md={6}>
        <img alt="Dashboard" width="100%" height="auto" src={dashboard} />
      </Grid>
    </Grid>
  );
}

export default Features;
