import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ICategory } from "../../Types/models";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
interface IListCategory {
  categories: ICategory[];
}

const ListCategory = ({ categories }: IListCategory) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} px={3} my={3}>
        {categories.map((category) => (
          <Grid item md={2} key={category.id}>
            <Avatar
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
