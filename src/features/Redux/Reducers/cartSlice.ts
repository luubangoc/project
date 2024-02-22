import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IItemCart, IProduct } from "../../../Types/models";

interface InitialState {
  listProductCart: IItemCart[];
}

const initialState: InitialState = {
  listProductCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    handleAddToCart: (state, payloadAction: PayloadAction<IItemCart>) => {
      const filterItem = state.listProductCart.filter(
        (item) => item.product.id === payloadAction.payload.product.id
      );
      if (filterItem.length > 0) {
        const newCart = state.listProductCart.map((item) => {
          if (item.product.id === payloadAction.payload.product.id) {
            const newItem: IItemCart = {
              product: item.product,
              quantity: item.quantity + payloadAction.payload.quantity,
            };
            return newItem;
          } else {
            return item;
          }
        });
        state.listProductCart = newCart;
      } else {
        const newCart = [...state.listProductCart, payloadAction.payload];
        state.listProductCart = newCart;
      }
    },
    handleIncreaseQuantity: (state, payloadAction: PayloadAction<string>) => {
      const newCart = state.listProductCart?.map((item) => {
        if (item.product.id === payloadAction.payload) {
          const newItem: IItemCart = {
            product: item.product,
            quantity: item.quantity + 1,
          };
          return newItem;
        } else {
          return item;
        }
      });
      state.listProductCart = newCart;
    },

    handleReduceQuantity: (state, payloadAction: PayloadAction<string>) => {
      const newCart = state.listProductCart
        ?.map((item) => {
          if (item.product.id === payloadAction.payload) {
            const newItem: IItemCart = {
              product: item.product,
              quantity: item.quantity - 1,
            };
            return newItem;
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0);
      state.listProductCart = newCart;
    },
    handleDeleteProduct: (state, payloadAction: PayloadAction<string>) => {
      const newCart = state.listProductCart.filter(
        (item) => item.product.id !== payloadAction.payload
      );

      state.listProductCart = newCart;
    },

    handleClearCart: (state) => {
      state.listProductCart = [];
    },
  },
});

export const {
  handleAddToCart,
  handleIncreaseQuantity,
  handleReduceQuantity,
  handleDeleteProduct,
  handleClearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
