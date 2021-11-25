import { configureStore } from "@reduxjs/toolkit";
import articalesSlices from "./slices/articalesSlices";
import Search from "./slices/serachSlices";
export default configureStore({
  reducer: {
    search: Search,
    articales: articalesSlices,
  },
});
