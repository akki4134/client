import * as React from "react";
// import { styled } from "@mui/joy/styles";
// import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import PricingCards from "./Components/PricingCards";
import StarterPlan from "./Components/StarterPlan";
import PremiumPlan from "./Components/PremiumPlan";


// const Item = styled(Sheet)(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
//   ...theme.typography["body-sm"],
//   padding: theme.spacing(1),
//   textAlign: "center",
//   borderRadius: 4,
//   color: theme.vars.palette.text.secondary,
// }));

const styles = {
  h1: {
    color: "", // Text color
    fontSize: "3.1rem", // Font size
  },
  h1spam: {
    color: "blue", // Text color
    fontSize: "3.2rem", // Font size
  },
};

export default function Index() {
  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" padding={5}>
        <Grid xs={12} md={6}>
          Animation
        </Grid>
        <Grid xs={12} md={6}>
          <div>
            <h1 style={styles.h1}>
              Website<span style={styles.h1spam}> Designing</span>,
              <span style={styles.h1spam}> Hosting</span>,
              <span style={styles.h1spam}> SEO </span>& More for Your
              <span style={styles.h1spam}> Business</span>.
            </h1>
            <h4>
              One Stop Software for all your Web Application, Hosting, SEO,
              Digital Marketing & Software Needs.
            </h4>
            <p>
              we have team of innovative web designers who crafts visually
              captivating and user-centric websites that leave a lasting
              impression.
            </p>
          </div>
        </Grid>
        <StarterPlan />
        <Grid>
          <h1 style={styles.h1}>Yearly Plans</h1>
          <PricingCards />
        </Grid>
        <PremiumPlan />
        <a href={`/contact`}>Contact Us</a>
      </Grid>
    </div>
  );
}
