import React from "react";
import { Grid, Typography, Button, Box } from "@mui/joy";
import ArrowForward from "@mui/icons-material/ArrowForward";

function AnimationFeature() {
  return (
    <>
      <Grid mt={10}xs={12} md={6}>
        Animation
      </Grid>
      <Grid mt={10} xs={12} md={4}>
        <Typography m={2} mt={5} color="primary" fontSize="lg" fontWeight="lg">
          The power to do more
        </Typography>
        <Typography
          m={2}
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Website Designing, Hosting, SEO & More for Your Business.
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
        <Box sx={{ m: 2, mt: 2 }}>
          <Button
            m={10}
            size="lg"
            endDecorator={<ArrowForward fontSize="xl" />}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default AnimationFeature;
