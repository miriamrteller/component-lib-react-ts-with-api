import { useState } from 'react';
import { Button, Card } from 'components';
import { ButtonGroup, Typography } from '@mui/material';
import { theme } from 'theme';
// using tokens direclty from mui theme to save time rather than creating a separate style-tokens file

export const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography variant="h1" sx={{ color: theme.palette.primary.dark }}>
        Component Library
      </Typography>
      <Card className="card" sx={{ color: theme.palette.secondary.dark }}>
        <Typography variant="h3">Count is {count}</Typography>
        <ButtonGroup>
          <Button
            sx={{ backgroundColor: theme.palette.primary.light }}
            onClick={() => setCount((count) => count + 1)}
          >
            + 1
          </Button>
          <Button color="secondary" onClick={() => setCount(0)}>
            reset
          </Button>
          <Button
            sx={{ backgroundColor: theme.palette.primary.light }}
            onClick={() => setCount((count) => count - 1)}
          >
            - 1
          </Button>
        </ButtonGroup>
      </Card>
      <Typography variant="body2" className="read-the-docs">
        Click on the buttons to change the count
      </Typography>
    </>
  );
};

export default MainPage;
