import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductCart } from "../../../Types/models";

interface InitialState {
  listProductCart: IProductCart[];
}

const initialState: InitialState = {
  listProductCart: [],
};

export interface IItemCart {
  id: any;
  size: any;
  color: any;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    handleAddToCart: (state, payloadAction: PayloadAction<IProductCart>) => {
      const filterItem = state.listProductCart.filter(
        (item) =>
          item.id === payloadAction.payload.id &&
          item.color === payloadAction.payload.color &&
          item.size === payloadAction.payload.size
      );
      if (filterItem.length > 0) {
        const newCart = state.listProductCart.map((item) => {
          if (
            item.id === payloadAction.payload.id &&
            item.color === payloadAction.payload.color &&
            item.size === payloadAction.payload.size
          ) {
            {
              const newItem: IProductCart = {
                ...item,
                quantity: item.quantity + payloadAction.payload.quantity,
              };
              return newItem;
            }
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
    handleIncreaseQuantity: (
      state,
      payloadAction: PayloadAction<IItemCart>
    ) => {
      const newCart = state.listProductCart?.map((item) => {
        if (
          item.id === payloadAction.payload.id &&
          item.color === payloadAction.payload.color &&
          item.size === payloadAction.payload.size
        ) {
          const newItem: IProductCart = {
            ...item,
            quantity: item.quantity + 1,
          };
          return newItem;
        } else {
          return item;
        }
      });
      state.listProductCart = newCart;
    },

    handleReduceQuantity: (state, payloadAction: PayloadAction<IItemCart>) => {
      const newCart = state.listProductCart
        ?.map((item) => {
          if (
            item.id === payloadAction.payload.id &&
            item.color === payloadAction.payload.color &&
            item.size === payloadAction.payload.size
          ) {
            const newItem: IProductCart = {
              ...item,
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
    handleDeleteProduct: (state, payloadAction: PayloadAction<IItemCart>) => {
      const newCart = state.listProductCart.filter(
        (item) =>
          item.id !== payloadAction.payload.id ||
          item.color !== payloadAction.payload.color ||
          item.size !== payloadAction.payload.size
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
