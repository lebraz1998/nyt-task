import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalComponents from "../../components/articales/modal.components";
import { Articles, Doc } from "../../types/articles.types";

export default function Articale() {
  const state = useSelector(
    (state: {
      articales: { loading: boolean; page: number; articales: Doc[] };
    }) => state.articales,
  );

  const [data, setData] = useState<Doc>();
  const { query, replace } = useRouter();
  useEffect(() => {
    if (query.id) {
      if (state.loading && state.page === 0) {
        replace("/");
      } else {
        const article = state.articales.filter((res) =>
          res._id.includes(query.id as string),
        );

        if (article.length > 0) {
          setData(article[0]);
        } else {
          replace("/");
        }
      }
    } else {
      replace("/");
    }
    return () => {};
  }, [query.id, replace, state.articales, state.loading, state.page]);
  return data ? <ModalComponents articale={data} /> : <div></div>;
}
