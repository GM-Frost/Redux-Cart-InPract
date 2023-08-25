import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/ProductSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "../features/CartSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
setupListeners(store.dispatch);

// //sending hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
