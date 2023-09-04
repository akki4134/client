import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import logo from "../Images/logo.png";
import { Grid } from "@mui/joy";

export default function Maintainance() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <Grid container direction="row">
            <Typography>
              <img alt="Logo" width="30px" height="auto" src={logo}></img>
            </Typography>
            <Typography level="h3">WEHOWARE</Typography>
          </Grid>

          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Under Maintainace
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            we are working, We have a older version to check
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
