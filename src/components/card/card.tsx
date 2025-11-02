import { Checkbox, Card as MuiCard, type CardProps as MuiCardProps } from '@mui/material';
import { theme } from 'theme'; // using tokens directly from theme for speed here

export type CardProps = MuiCardProps & {
  hascheckbox?: boolean;
  checked?: boolean
};

export const Card = (props: CardProps) => {
  return (
    <MuiCard {...props} sx={{ padding: theme.spacing(4, 2), margin: theme.spacing(1), maxWidth: theme.spacing(50) }}>
      {props.children}
      {props.hascheckbox && <Checkbox checked={props.checked} />}
    </MuiCard>
  );
};

export default Card;
