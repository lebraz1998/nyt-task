import axios, { AxiosResponse } from "axios";
import React from "react";
import { Articles } from "../types/articles.types";
type props = {
  page: number;
  search: string;
};
export function ArticalesQuery(props: props): Promise<AxiosResponse<Articles>> {
  return axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?${
      props.search === "" ? "" : `fq=news_desk(${props.search})&`
    }page=${props.page}&&q=react&api-key=OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ`,
  );
}
