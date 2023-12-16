import React from "react";
import styles from "./Users.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { getUsers } from "../../utils/Requests";

export const loader = async () => {
  const users = await getUsers();
  return { users };
};
export default function Users() {
  const { users } = useLoaderData();
  return (
    <Container className={styles.users}>
      <Box className={styles.users}>
        {users.map((u) => (
          <Link className={styles.user} to={`/users/${u.id}`} key={u.id}>
            <Typography variant="h4">{u.name}</Typography>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
