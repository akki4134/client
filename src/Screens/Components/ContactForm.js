import { Grid, Typography } from "@mui/joy";
import React from "react";
import ConnectCard from "./ConnectCard";

function MFFeatures() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid xs={12} md={6}>
        <Typography m={2} mt={5} color="primary" fontSize="lg" fontWeight="lg">
          The power to do more
        </Typography>
        <Typography
          m={2}
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Website 
        </Typography>
        <Typography
          m={2}
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Website Designing,
        </Typography>
        <Typography
          m={2}
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Website Designing, Hosting,
        </Typography>
        <Typography
          m={2}
          mt={4}
          fontSize="lg"
          textColor="text.secondary"
          lineHeight="lg"
        >
          we have team of innovative web designers who crafts visually
          captivating and user-centric websites that leave a lasting impression.
        </Typography>
      </Grid>
      <Grid xs={12} md={6}>
        <ConnectCard />
      </Grid>
    </Grid>
  );
}

export default MFFeatures;
