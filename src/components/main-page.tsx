import {Typography } from '@mui/material';
import { theme } from 'theme';
import { UserList } from './user-list';
// using tokens direclty from mui theme to save time rather than creating a separate style-tokens file

export const MainPage = () => {
  return (
        <>
      <Typography variant="h1" sx={{ color: theme.palette.primary.dark }}>
        UserList fake API
      </Typography>
      <UserList />     
    </>
  );
};

export default MainPage;
