import { CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import {
  CardComponents,
  CardComponentsView,
} from "../components/articales/card.components";
import { HomeStyled } from "../styles/home.style";
import { Doc } from "../types/articles.types";
import { Col, Row } from "react-grid-system";
import { useSelector } from "react-redux";

export default function HomeComponents() {
  const state = useSelector(
    (state: {
      articales: { articales: Doc[]; loading: boolean; update: boolean };
    }) => state.articales,
  );

  return !state.loading ? (
    <HomeStyled>
      <Container>
        <Row style={{ rowGap: 10 }}>
          {state.articales.map((res, i) => (
            <Col sm={12} md={6} key={i} lg={4}>
              {i === state.articales.length - 1 ? (
                <CardComponentsView {...res} />
              ) : (
                <CardComponents {...res} />
              )}
            </Col>
          ))}
        </Row>
        {state.update ? (
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body1">Loading Data...</Typography>
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          <></>
        )}
      </Container>
    </HomeStyled>
  ) : (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
