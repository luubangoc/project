import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from "../Reducers/productSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Saga/rootSaga";
import categorySlice from "../Reducers/categorySlice";
import cartSlice from "../Reducers/cartSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  categorySlice,
  productSlice,
  cartSlice,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
