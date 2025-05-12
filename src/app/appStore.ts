import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { newsApi } from "../entities/news/api/newsApi";
import { rootReducer } from "./appReducer";
import { categoriesApi } from "../entities/category/api/categoriesApi";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleWare) =>
		getDefaultMiddleWare().concat(newsApi.middleware, categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
