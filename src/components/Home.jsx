import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { API_URL, api_data_limit } from "../constant/constant.js";
import MovieComponent from "./MovieComponent.jsx";
import { debounce } from "../utils/debouce.js";
import { selectIsLoading, selectPage } from "../store/slices/appSelector.js";
import { appActions } from "../store/slices/appSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const pageRef = useRef(page);

  const getCardData = async () => {
    const res = await fetch(
      `${API_URL}?_limit=${api_data_limit}&_page=${page}`
    );
    const { data } = await res.json();
    dispatch(appActions.addMovies(data));
    dispatch(appActions.toggleLoading(false));
  };

  const handleInfiniteScroll = debounce(() => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        dispatch(appActions.updatePage(pageRef.current + 1));
        dispatch(appActions.toggleLoading(true));
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  });

  useEffect(() => {
    pageRef.current = page;
    getCardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
      toast.info("Hang tight, We’re retrieving the data you need!", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        draggablePercent: 50,
        theme: "dark",
      });
    }
  }, [isLoading]);

  return (
    <div>
      <MovieComponent />
    </div>
  );
};

export default Home;
