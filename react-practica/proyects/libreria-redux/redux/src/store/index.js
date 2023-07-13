
import reducer from "../reducers";
import { createSelectorHook } from "react-redux";

const store = createSelectorHook(reducer)

export default store