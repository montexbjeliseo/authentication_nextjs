import { Provider } from "react-redux"
import { Store } from "./store"

export const ReduxProvider = ({ children }) => {
    return <Provider store={Store}>{children}</Provider>
}