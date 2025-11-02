import { Card as MuiCard, type CardProps as MuiCardProps } from '@mui/material';
import { theme } from 'theme'; // using tokens directly from theme for speed here

export type CardProps = MuiCardProps & {};

export const Card = (props: CardProps) => {
  return (
    <MuiCard {...props} sx={{ padding: theme.spacing(1, 2) }}>
      {props.children}
    </MuiCard>
  );
};

export default Card;
