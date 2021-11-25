import { CheckSharp, ShareSharp } from "@mui/icons-material";
import {
  Alert,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { ModalStyled } from "../../styles/home.style";
import { Doc } from "../../types/articles.types";
import useClippy from "use-clippy";
export default function ModalComponents({ articale }: { articale: Doc }) {
  const clippy = useClippy();
  const [show, setShow] = useState(false);
  const { url } = useMemo(
    () =>
      articale.multimedia.length > 0
        ? articale.multimedia[0]
        : { width: 200, height: 200, url: "" },
    [articale.multimedia],
  );
  useEffect(() => {
    const intrval = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearInterval(intrval);
  }, [show]);

  console.log(articale);
  return (
    <ModalStyled>
      {show ? (
        <Alert
          variant="filled"
          style={{ position: "absolute", right: 0, zIndex: 2, padding: 5 }}
          icon={<CheckSharp fontSize="inherit" />}
          severity="success"
        >
          Link of the article
        </Alert>
      ) : (
        <></>
      )}
      <Box sx={{ borderRadius: 2 }}>
        <h2>{articale.headline.main}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <CardMedia
            alt="img"
            component="img"
            src={
              url ? "https://www.nytimes.com/" + url : "/asset/img/nytimes.png"
            }
          />
        </div>

        <Divider style={{ margin: 15 }} />
        {articale.keywords.map((res) => (
          <Chip key={res.name} label={"#" + res.value} />
        ))}

        <div>
          <IconButton
            onClick={() => {
              clippy[1](articale.web_url);
              setShow(true);
            }}
          >
            <ShareSharp />
          </IconButton>
          <Typography variant="h6">
            {moment(articale.pub_date).format("D-M-Y mm:hh a")}
          </Typography>
        </div>

        <Typography variant="h5">{articale.lead_paragraph}</Typography>
      </Box>
    </ModalStyled>
  );
}
