import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, CardMedia, DialogTitle, Typography } from "@mui/material";
import { IProduct } from "../../../Types/models";
import styles from "./dialogproduct.module.css";
import ImageDialogComponent from "./imageDialogComponent";
import ContentDialogComponent from "./contentDialogComponent";

interface OpenProps {
  open: boolean;
  onHandleClose(open: boolean): void;
}

const DialogProductComponent = ({ open, onHandleClose }: OpenProps) => {
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    <Fragment>
      <BootstrapDialog
        onClose={() => onHandleClose(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          sx: {
            maxWidth: "70%",
            maxHeight: "100%",
            borderRadius: "10px",
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => onHandleClose(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="row d-sm-flex pt-4 px-0 mx-1">
          <Box className="col-12 col-sm-6 " alignItems='center' display='flex'>
            <ImageDialogComponent />
          </Box>
          <Box className="col-12 col-sm-6 " alignContent='center'>
            <ContentDialogComponent />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
};

export default DialogProductComponent;
