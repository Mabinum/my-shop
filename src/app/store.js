import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";

// 전역 상태를 보관하는 저장소 만들기
export const store = configureStore({
  // 전역 스토어에 리듀서 함수를 등록
  reducer:{
    product : productSlice,
    cart : cartSlice
  }
});