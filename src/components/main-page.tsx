import { Paper, Typography } from '@mui/material';
import { theme } from 'theme';
import { UserList } from './user-list';
// using tokens direclty from mui theme to save time rather than creating a separate style-tokens file

export const MainPage = () => {
  return (
    <Paper sx={{ padding: theme.spacing(8) }}>
      <Typography variant="h3" sx={{ color: theme.palette.primary.dark }}>
        UserList fake API
      </Typography>
      <UserList />
    </Paper>
  );
};

export default MainPage;
