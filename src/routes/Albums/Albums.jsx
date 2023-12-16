import React from "react";
import styles from "./Albums.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { getAlbums } from "../../utils/Requests";
export const loader = async () => {
  const albums = await getAlbums();
  return { albums };
};
function Albums() {
  const { albums } = useLoaderData();
  return (
    <Container className={styles.albumsContainer}>
      {albums.map((a) => (
        <Link className={styles.album} key={a.id} to={`/albums/${a.id}`}>
          <PhotoLibraryIcon className={styles.albumIcon} />
          <Typography variant="h5" className={styles.albumTitle}>
            {a.title}
          </Typography>
        </Link>
      ))}
    </Container>
  );
}
export default React.memo(Albums);
