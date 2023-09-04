import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Grid } from "@mui/joy";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

export default function PricingCards() {
  return (
    <>
      {/* <Grid container>
        <Grid xs={12} md={12}>
          <Typography
            level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
          >
            
          </Typography>
        </Grid>
      </Grid> */}
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={12} md={3}>
          <Card size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="success">
              Basic Website
            </Chip>
            <Typography level="h2">Basic</Typography>
            <Typography color="danger" level="body-xs">
              Top Features
            </Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check color="success" />
                </ListItemDecorator>
                1 Basic Website
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon color="error" />
                </ListItemDecorator>
                Free CDN
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Free Email
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Daily Backups
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Free SSL
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Bandwidth
              </ListItem>
              <Typography color="danger" level="body-xs">
                Security
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Malware Scanner
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Web Application Firewall
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Enhanced DDoS Protection
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Cloudflare Protected Nameservers
              </ListItem>
              <Typography color="danger" level="body-xs">
                Marketing
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Basic SEO
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Ranking
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Advertising Tools
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Audit Report
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Keyword Research Report
              </ListItem>
            </List>
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                C$1.49
                <Typography level="body-xs" textColor="text.tertiary">
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endDecorator={<KeyboardArrowRight />}
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="success">
              Basic Website + Basic Seo
            </Chip>
            <Typography level="h2">Bronze</Typography>
            <Typography color="danger" level="body-xs">
              Top Features
            </Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check color="success" />
                </ListItemDecorator>
                1 Basic Website
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon color="error" />
                </ListItemDecorator>
                Free CDN
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Free Email
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Daily Backups
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Free SSL
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Bandwidth
              </ListItem>
              <Typography color="danger" level="body-xs">
                {" "}
                Security
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Malware Scanner
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Web Application Firewall
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Enhanced DDoS Protection
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Cloudflare Protected Nameservers
              </ListItem>
              <Typography color="danger" level="body-xs">
                Marketing
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Basic SEO
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Ranking
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Advertising Tools
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Audit Report
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Keyword Research Report
              </ListItem>
            </List>
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                C$3.99
                <Typography level="body-xs" textColor="text.tertiary">
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endDecorator={<KeyboardArrowRight />}
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="success">
              Pro Website + Basic Seo
            </Chip>
            <Typography level="h2">Beta</Typography>
            <Typography color="danger" level="body-xs">
              Top Features
            </Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                1 Premium Website
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Free CDN
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Free Email
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Daily Backups
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Free SSL
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Bandwidth
              </ListItem>
              <Typography color="danger" level="body-xs">
                Security
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Malware Scanner
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Web Application Firewall
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Enhanced DDoS Protection
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Cloudflare Protected Nameservers
              </ListItem>
              <Typography color="danger" level="body-xs">
                Marketing
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Basic SEO
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Ranking
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Advertising Tools
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Website Audit Report
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <DoDisturbIcon />
                </ListItemDecorator>
                Keyword Research Report
              </ListItem>
            </List>

            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                C$9.99
                <Typography level="body-xs" textColor="text.tertiary">
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endDecorator={<KeyboardArrowRight />}
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card size="lg" variant="outlined">
            <Chip size="sm" variant="outlined" color="success">
              Pro Website + Pro Seo
            </Chip>
            <Typography level="h2">Business</Typography>
            <Typography color="danger" level="body-xs">
              Top Features
            </Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                1 Premium Website
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Free CDN
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Free Email
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Daily Backups
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Free SSL
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Unlimited Bandwidth
              </ListItem>

              <Typography color="danger" level="body-xs">
                Security
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Malware Scanner
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Web Application Firewall
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Enhanced DDoS Protection
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Cloudflare Protected Nameservers
              </ListItem>

              <Typography color="danger" level="body-xs">
                Marketing
              </Typography>
              <Divider inset="none" />
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Basic SEO
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Website Ranking
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Advertising Tools
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Website Audit Report
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Keyword Research Report
              </ListItem>
            </List>

            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                C$24.99
                <Typography level="body-xs" textColor="text.tertiary">
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                endDecorator={<KeyboardArrowRight />}
              >
                Subscribe
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
