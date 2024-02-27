import { Box } from '@mui/material'
import React, { Fragment } from 'react'
import ListCategory from '../home/listCategory'
import ListProductShop from '../../components/listproductshop'
import Navbar from '../../components/Header/Header'
import { useLocation } from 'react-router-dom'
import { RootState } from '../../features/Redux/Store/store'
import { useSelector } from 'react-redux'

const CategoryProduct = () => {
    const categories = useSelector(
        (state: RootState) => state.reducer.categorySlice.categories
    );
    const location = useLocation();
    const listCategoryProduct = location.state;
    const listProduct = useSelector(
      (state: RootState) => state.reducer.productSlice.listProduct
    );
    
  return (
    <Fragment>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box><ListCategory categories={categories} listProduct={listProduct}></ListCategory></Box>
        <Box className="px-2 py-4 my-4">
          <ListProductShop listProduct={listCategoryProduct}></ListProductShop>
        </Box>
      </Box>
    </Fragment>
  )
}

export default CategoryProduct;