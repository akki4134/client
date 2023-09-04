import React from "react";
import {
  Box,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import Check from "@mui/icons-material/Check";
export default function Secure() {
  return (
    <Grid
      mt={10}
      mb={10}
      container
      spacing={2}
      alignContent="center"
      justifyContent="center"
      textAlign="center"
    >
      <Grid xs={12} md={12}>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          Security Is Our Top Priority
        </Typography>
      </Grid>
      <Grid xs={12} md={12}>
        <Typography level="h4">
          Experience minimal latency and maximum speed with NVMe storage.
        </Typography>
      </Grid>
      <Grid>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Chip size="sm" variant="soft">
            Sketch 5+
          </Chip>
          <Chip size="sm" variant="soft">
            Figma
          </Chip>
          <Chip size="sm" variant="soft">
            Sketch 5+
          </Chip>
          <Chip size="sm" variant="soft">
            Figma
          </Chip>
        </Box>
        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
            </ListItemDecorator>
            Experience minimal latency and maximum speed with NVMe storage.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
            </ListItemDecorator>
            Experience minimal latency and maximum speed with NVMe storage.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
            </ListItemDecorator>
            Experience minimal latency and maximum speed with NVMe storage.
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check color="success" />
            </ListItemDecorator>
            Experience minimal latency and maximum speed with NVMe storage.
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
