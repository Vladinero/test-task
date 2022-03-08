import {NewsAction, NewsActionTypes} from "../../types/news";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchNews = () => {

  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({type: NewsActionTypes.FETCH_NEWS})
      setTimeout(async () => {
        const response = await axios.get('./mockApi/NEWS_DATA.json')
        dispatch({type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: await response.data})
      }, 1500)



    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: 'An error occurred!'
      })
    }
  }
}