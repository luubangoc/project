import React from 'react'
import { IProduct } from '../../Types/models'
import { Box, Rating, Typography } from '@mui/material';

interface ProductItemProps {
    productItem: IProduct;
}

const ContentProductComponent = ({ productItem }: ProductItemProps) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
        >
            <Typography component="span" align="center">
                {productItem.name}
            </Typography>
            <Box display="flex" justifyContent="center">
                <Rating
                    name="simple-controlled"
                    value={productItem.rating.rate}
                    size="small"
                />
            </Box>
            <Typography
                component="span"
                align="center"
                color="primary"
                fontWeight="bold"
                className="my-2"
            >
                $
                {productItem.discount !== 0
                    ? (
                        productItem.price -
                        productItem.price * (productItem.discount / 100)
                    ).toFixed(2)
                    : productItem.price}
            </Typography>
        </Box>
    )
}

export default ContentProductComponent