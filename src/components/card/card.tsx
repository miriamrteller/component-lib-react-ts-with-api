import { CardContent, Checkbox, Card as MuiCard, type CardProps as MuiCardProps } from '@mui/material';
import { theme } from 'theme'; // using tokens directly from theme for speed here
import { Button } from 'components/buttons/button'
import { useState, type ReactNode } from 'react';

export type CardProps = MuiCardProps & {
  hascheckbox?: boolean;
  checked?: boolean,
  hasExpand?: boolean,
  expandedContent?: ReactNode
};

export const Card = (props: CardProps) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <MuiCard {...props} sx={{ padding: theme.spacing(4, 2), margin: theme.spacing(1) }}>
      {props.children}
      {props.hascheckbox && <Checkbox checked={props.checked} />}
      {props.hasExpand && <Button variant='text' onClick={() => setExpanded(prev => !prev)}>{expanded ? '-' : '+'}</Button>}
      {expanded && props.expandedContent && <CardContent>{props.expandedContent}</CardContent>}
    </MuiCard>
  );
};

export default Card;
