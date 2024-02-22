import React from 'react'
import { IProduct } from '../../Types/models';
import { CardMedia } from '@mui/material';
import styles from './product.module.css';
interface ProductImageProps {
    productItem: IProduct;
    hoverState:boolean ; 
  }

const ImageProductComponent = ({productItem , hoverState}:ProductImageProps) => {
  return (
    <>
        <CardMedia
                  component="img"
                  height="250"
                  image={
                    !hoverState ? productItem.images[0] : productItem.images[1]
                  }
                  alt={productItem.name}
                  className={
                    hoverState ? styles.productImageHover : styles.productImage
                  }
        ></CardMedia>
    </>
  )
}

export default ImageProductComponent