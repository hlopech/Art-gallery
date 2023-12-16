import React from "react";
import styles from "./User.module.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { getUserAlbums, getUser } from "../../utils/Requests";
export const loader = async ({ params: { id } }) => {
  const user = await getUser(id);
  const albums = await getUserAlbums(id);
  return { user, albums };
};

function User() {
  const { user, albums } = useLoaderData();
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box className={styles.userInfo}>
        <Typography variant="h4" className={styles.title}>
          {user.name}
        </Typography>
        <Typography variant="h5" className={styles.infoField}>
          Username: {user.username}
        </Typography>
        <Typography variant="h5" className={styles.infoField}>
          Email: {user.email}
        </Typography>
        <Typography variant="h5" className={styles.infoField}>
          Phone: {user.phone}
        </Typography>
        <Typography variant="h5" className={styles.infoField}>
          Website : {user.website}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" className={styles.title}>
          Albums
        </Typography>
        <Box className={styles.albumsContainer}>
          {albums.map((el) => (
            <Link className={styles.album} key={el.id} to={`/albums/${el.id}`}>
              <PhotoLibraryIcon />
              <Typography variant="h5" className={styles.albumTitle}>
                {el.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
export default React.memo(User);
