import * as React from "react";
import { Link, Grid, Typography, Card, CardContent, Divider } from "@mui/joy";
import logo from "../Images/logo.png";

export default function Footer() {
  return (
    <>
      <Grid container mt={10} direction="row" alignContent="flex-start">
        <Typography mt={0.5}>
          <img alt="Logo" width="40px" height="auto" src={logo}></img>
        </Typography>
        <Typography level="h1">WEHOWARE</Typography>
      </Grid>
      <Grid mb={5} xs={12} md={12}>
        <Typography variant="subtitle2" level="caption text">
          Our approach involves a continuous commitment to enhancing server
          technology, expert customer support, and ensuring a smooth and
          effortless web hosting experience for all.
        </Typography>
      </Grid>
      <Grid
        container
        variant="outlined"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Support</Typography>
              <Divider />
              <Typography>
                <Link href="/contact" overlay underline="none">
                  Contact Us
                </Link>
              </Typography>
              <Typography>Resources</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Wiki</Typography>
              <Divider />
              <Typography>
                <Link href="/" overlay underline="none">
                  Home
                </Link>
              </Typography>
              <Typography>Sitemap</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Others</Typography>
              <Divider />
              <Typography>Blog</Typography>
              <Typography>News</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Technology</Typography>
              <Divider />
              <Typography>Firewall</Typography>
              <Typography>Security</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Reach</Typography>
              <Divider />
              <Typography>About</Typography>
              <Typography>Technology</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Tools</Typography>
              <Divider />
              <Typography>Online Store</Typography>
              <Typography>SEO </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Help</Typography>
              <Divider />
              <Typography>Tutorials</Typography>
              <Typography>Knowledge Base</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6} md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography level="title-md">Company</Typography>
              <Divider />
              <Typography>Career</Typography>
              <Typography>Student Discount</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
