import { Card, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useState } from "react";
import DialogProductComponent from "./dialogProduct/dialogProductComponent";
import { IProduct } from "../../Types/models";

interface ProductItemProps {
  productItem: IProduct;
}

const OptionsBarComponent = ({ productItem }: ProductItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (open: boolean) => {
    setOpen(open);
  };
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <>
      <Card className="w-75 mx-auto d-flex justify-content-center rounded ">
        <BootstrapTooltip title="Add to Cart" placement="top">
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </BootstrapTooltip>

        <BootstrapTooltip
          title="Quick view"
          placement="top"
          onClick={handleClickOpen}
        >
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
        </BootstrapTooltip>

        <BootstrapTooltip title="Compare" placement="top">
          <IconButton>
            <CompareArrowsIcon />
          </IconButton>
        </BootstrapTooltip>

        <BootstrapTooltip title="Add to wishlist" placement="top">
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </BootstrapTooltip>
      </Card>
      <DialogProductComponent
        open={open}
        onHandleClose={handleClose}
        productItem={productItem}
      ></DialogProductComponent>
    </>
  );
};

export default OptionsBarComponent;
