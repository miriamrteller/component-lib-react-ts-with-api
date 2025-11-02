import { Typography, Skeleton, Box } from '@mui/material';
import { Card } from 'components';
import { useApiHook } from 'hooks/useApiHook';
import { useEffect } from 'react';
import { theme } from 'theme';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const ToDoList = () => {

    const { data, getData, pending, isError, errormsg } = useApiHook();

    useEffect(() => { getData() }, [])

    if (pending)
        return <Skeleton />

    if (isError)
        return <Card><Typography sx={{ color: theme.palette.error.main }}>{errormsg}</Typography></Card>


    return (<Box sx={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>{data.map((d: Todo) => {
        return (
            <Card hascheckbox checked={d.completed}>
                <Typography variant='caption'>Todo {d.id} {d.title}</Typography>
            </Card>
        )
    })}</Box>)
}