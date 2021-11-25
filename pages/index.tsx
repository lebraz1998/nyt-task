import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setArticales } from "../provider/slices/articalesSlices";
import { ArticalesQuery } from "../qurey/articalesQuery";
import HomeComponents from "../src/home";
import { Doc } from "../types/articles.types";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log("hi");

//   return { props: {}, redirect: "/hh" };
// };

const Home: NextPage = () => {
  const state = useSelector(
    (state: {
      articales: {
        page: number;
        articales: Doc[];
        search: string;
        update: boolean;
        loading: boolean;
      };
    }) => state.articales,
  );

  const dispatch = useDispatch();
  const { mutate } = useMutation("articales", ArticalesQuery, {
    onSuccess: (e) => {
      dispatch(setArticales(e.data.response.docs));
    },
    onError: (e) => {},
  });
  useEffect(() => {
    if (state.update || state.loading) {
      mutate({ page: state.page, search: state.search });
    }
  }, [state.page, state.search, mutate, state.loading]);

  return (
    <div>
      <HomeComponents />
    </div>
  );
};

export default Home;
