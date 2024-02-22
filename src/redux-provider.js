'use client';

import { Provider } from "react-redux"
import { store } from "./store"
import { persistStore } from "redux-persist"

export const persistor = persistStore(store);

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}