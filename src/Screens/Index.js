import * as React from "react";
import { Box } from "@mui/joy";
import PricingCards from "./Components/PricingCards";
import PremiumPlan from "./Components/PremiumPlan";
import Features from "./Components/Features";
import MFFeatures from "./Components/MFFeatures";
import Footer from "./Components/Footer";
import Maintainance from "./Components/Maintainance";
import Secure from "./Components/Secure";

export default function Index() {
  return (
    <div>
      <Box>
        <MFFeatures />
        <Maintainance />
        <Features />
        <Secure />
        <PricingCards />
        <PremiumPlan />
        <Footer />
      </Box>
    </div>
  );
}
