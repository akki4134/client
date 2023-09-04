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

export default function PremiumPlan() {
  return (
    <Grid container mt={10} alignItems="center" justifyContent="center">
      <Grid xs={12} md={6}>
        <Typography level="h2">Grap Our Premium Plan Now</Typography>
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
      <Grid xs={12} md={6}>
        <Box
          sx={{
            boxShadow: 3,
          }}
        >
          <Card
            variant="solid"
            color="primary"
            size="lg"
            invertedColors
            sx={{
              mt: 10,
              boxShadow: "lg",
              maxWidth: "100%",
              // to make the demo resizeable
              overflow: "auto",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Chip size="sm" variant="soft">
                Premium Website
              </Chip>
              <Chip size="sm" variant="soft">
                Premium Seo
              </Chip>
            </Box>
            <div>
              <Typography level="h2">
                C$49.99
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
        </Box>
      </Grid>
    </Grid>
  );
}
