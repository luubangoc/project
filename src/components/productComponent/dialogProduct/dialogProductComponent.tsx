import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CardMedia, Typography } from "@mui/material";
import { IProduct } from "../../../Types/models";
import styles from "./dialogproduct.module.css";

interface OpenProps {
  open: boolean;
  onHandleClose(open: boolean): void;
  productItem: IProduct;
}

const DialogProductComponent = ({
  open,
  onHandleClose,
  productItem,
}: OpenProps) => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={() => onHandleClose(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
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
        <DialogContent className={styles.dialogContent}>
          <Box className={styles.boxContent}>
            <CardMedia
              component="img"
              height="450"
              image={productItem.images[3]}
            />
          </Box>
          <Box className={styles.boxContent}>
            <Box>
              <Typography variant="h4">{productItem.name}</Typography>
            </Box>
            <Box>
              <Typography component="span">
                $
                {productItem.discount !== 0
                  ? (
                      productItem.price -
                      productItem.price * (productItem.discount / 100)
                    ).toFixed(2)
                  : productItem.price}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default DialogProductComponent;
