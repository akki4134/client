import * as React from "react";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Check from "@mui/icons-material/Check";
import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

export default function StarterPlan() {
  return (
    <Grid container alignItems="center" justifyContent="center" padding={5}>
      <Grid xs={12} md={4}>
        <Typography level="h2">Grap Our Starter Plan Now</Typography>
        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
            </ListItemDecorator>
            1 Basic Website
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
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
        </List>
      </Grid>
      <Grid xs={12} md={7}>
        <Card
          variant="solid"
          color="primary"
          size="md"
          invertedColors
          sx={{
            m: 5,
            boxShadow: "lg",
            maxWidth: "100%",
            // to make the demo resizeable
            overflow: "auto",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip size="sm" variant="soft">
              Sketch 5+
            </Chip>
            <Chip size="sm" variant="soft">
              Figma
            </Chip>
          </Box>
          <div>
            <Typography level="h2">
              C$1.49
              <Typography fontSize="sm" textColor="text.tertiary">
                /month
              </Typography>
            </Typography>
          </div>
          <CardContent>
            <Typography level="title-lg">Individual License</Typography>
            <Typography level="body-md">
              This license allows you to use the Symbol System Design with
              unlimited amount of personal and commercial projects.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="solid">Purchase Now</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
