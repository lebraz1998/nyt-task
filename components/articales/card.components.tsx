import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";
import { Doc } from "../../types/articles.types";
import ModalComponents from "./modal.components";
import { useInView } from "react-intersection-observer";
import { setPage } from "../../provider/slices/articalesSlices";
import { useDispatch } from "react-redux";

export function CardComponentsView(doc: Doc) {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView({});
  const { push } = useRouter();

  const dispatch = useDispatch();
  console.log(doc._id);
  const open = useCallback(() => {
    const id = doc._id.split("/");

    push("/articale/" + id[id.length - 1]);
  }, [push, doc._id]);
  useEffect(() => {
    if (inView) {
      if (!viewed) {
        dispatch(setPage());
        setViewed(true);
      }
    }
  }, [inView, viewed, dispatch]);

  return (
    <Card sx={{ maxWidth: "100%", height: 450 }} ref={ref}>
      <CardActionArea onClick={open}>
        <CardMedia
          src={
            doc.multimedia.length > 0
              ? "https://www.nytimes.com/" + doc.multimedia[0].url
              : "./asset/img/nytimes.png"
          }
          alt={doc.headline.main}
          component="img"
          height="180px"
          style={{ objectFit: "cover" }}
        />
      </CardActionArea>
      <CardContent>
        <Typography fontWeight="bold" gutterBottom variant="h5" component="div">
          {doc.headline.main}
        </Typography>
        <Typography
          flexWrap="nowrap"
          textOverflow="ellipsis"
          height="120px"
          fontSize="13pt"
          variant="h6"
          color="text.secondary"
        >
          {doc.abstract.substring(0, 90)} {doc.abstract === "" ? "" : "..."}
        </Typography>
        <CardActions
          style={{
            position: "absolute",
            right: 15,
            bottom: 15,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Button variant="outlined" onClick={open}>
            <Typography
              flexWrap="nowrap"
              textOverflow="ellipsis"
              sx={{
                fontSize: 16,
                ":hover": {
                  color: "blueviolet",
                },
              }}
              color="text.secondary"
            >
              read more{" "}
            </Typography>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export function CardComponents(doc: Doc) {
  const [modal, setModal] = useState<any>([]);
  const { push } = useRouter();

  const open = useCallback(() => {
    const id = doc._id.split("/");

    push("/articale/" + id[id.length - 1]);
  }, [push, doc._id]);

  return (
    <Card sx={{ maxWidth: "100%", height: 450 }}>
      {modal}
      <CardActionArea onClick={open}>
        <CardMedia
          src={
            doc.multimedia.length > 0
              ? "https://www.nytimes.com/" + doc.multimedia[0].url
              : "./asset/img/nytimes.png"
          }
          alt={doc.headline.main}
          component="img"
          height="180px"
          style={{ objectFit: "cover" }}
        />
      </CardActionArea>
      <CardContent>
        <Typography fontWeight="bold" gutterBottom variant="h5" component="div">
          {doc.headline.main}
        </Typography>
        <Typography
          flexWrap="nowrap"
          textOverflow="ellipsis"
          height="120px"
          fontSize="13pt"
          variant="h6"
          color="text.secondary"
        >
          {doc.abstract.substring(0, 90)} {doc.abstract === "" ? "" : "..."}
        </Typography>
        <CardActions
          style={{
            position: "absolute",
            right: 15,
            bottom: 15,
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Button variant="outlined" onClick={open}>
            <Typography
              flexWrap="nowrap"
              textOverflow="ellipsis"
              sx={{
                fontSize: 14,
                ":hover": {
                  color: "blueviolet",
                },
              }}
              color="text.secondary"
            >
              read more{" "}
            </Typography>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
