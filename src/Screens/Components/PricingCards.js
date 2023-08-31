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
    <Grid
      container
      display="flex"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ flexGrow: 1 }}
    >
      <Grid xs={12} md={4}>
        <Card size="lg" variant="outlined">
          <Chip size="sm" variant="outlined" color="success">
            Basic Level
          </Chip>
          <Typography level="h2">BETA</Typography>
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
                <DoDisturbIcon color="error"/>
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
              {" "}
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
              C$49.99
              <Typography level="body-xs" textColor="text.tertiary">
                /Year
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
      <Grid xs={12} md={4}>
        <Card size="lg" variant="outlined">
          <Chip size="sm" variant="outlined" color="success">
            General Level
          </Chip>
          <Typography level="h2">GAMA</Typography>
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
            <Divider />
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
              C$99.99
              <Typography level="body-xs" textColor="text.tertiary">
                /Year
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
      <Grid xs={12} md={4}>
        <Card size="lg" variant="outlined">
          <Chip size="sm" variant="outlined" color="success">
            Advance Level
          </Chip>
          <Typography level="h2">ALPHA</Typography>
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
              C$299.99
              <Typography level="body-xs" textColor="text.tertiary">
                /Year
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
  );
}
