import { createContext, useContext, useReducer } from "react";
import { blogReducer, initialState } from "../reducer/blogReducer";

const blogContext = createContext();

export const useBlogs = () => useContext(blogContext);

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, initialState);

  return (
    <blogContext.Provider value={[blogs, dispatch]}>
      {children}
    </blogContext.Provider>
  );
};
