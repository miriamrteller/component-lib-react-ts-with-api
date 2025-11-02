import { Paper, Typography } from '@mui/material';
import { theme } from 'theme';
import { ToDoList } from './todo-list';
// using tokens direclty from mui theme to save time rather than creating a separate style-tokens file

export const MainPage = () => {
  return (
    <Paper sx={{ padding: theme.spacing(8) }}>
      <Typography variant="h3" sx={{ color: theme.palette.primary.dark }}>
        TodoList fake API
      </Typography>
      <ToDoList />
    </Paper>
  );
};

export default MainPage;
