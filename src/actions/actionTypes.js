import { markdownApi } from "../services/serviceMarkDown";

export const fetchMarkdown = () => async dispatch => {
  try {
    const result = await markdownApi();
    dispatch({ type: "FETCH_MARKDOWN_DATA", payload: result });
  }catch(error){
      throw error;
  }
};
