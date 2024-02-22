import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ICategory, IProduct } from "../../Types/models";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
interface IListCategory {
  categories: ICategory[];
  listProduct: IProduct[];
}

const ListCategory = ({ categories, listProduct }: IListCategory) => {
  const navigate = useNavigate();
  const handleNavigate = (value: string) => {
    console.log(value);

    const listProductCategory = listProduct.filter(
      (p) => p.categoryName === value
    );
    navigate(`/category/${value}`, { state: listProductCategory });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} px={3} my={3}>
        {categories.map((category) => (
          <Grid item md={2} key={category.id}>
            <Avatar
              onClick={() => handleNavigate(category.name)}
              alt={category.name}
              src={category.image}
              sx={{ height: "100%", width: "100%" }}
            ></Avatar>
            <Box sx={{}}>
              <Typography>{category.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListCategory;
