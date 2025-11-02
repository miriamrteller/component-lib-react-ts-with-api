import { Typography, Skeleton, Box } from '@mui/material';
import { Card } from 'components';
import { useApiHook } from 'hooks/useApiHook';
import { useEffect } from 'react';
import { theme } from 'theme';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: number
            lng: number
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export const UserList = () => {

    const { data, getData, pending, isError, errormsg } = useApiHook();

    useEffect(() => { getData() }, [])

    if (pending)
        return <>
            <Skeleton />
            <Skeleton />
            <Skeleton /></>;
    if (isError)
        return <Card><Typography sx={{ color: theme.palette.error.main }}>{errormsg}</Typography></Card>;
    if (data.length < 1) {
        return <Card><Typography>Sorry, no users</Typography></Card>
    }
    return (<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{data.map((d: User) => {
        return (
            <Card sx={{ maxWidth: theme.spacing(100) }} hasExpand
                expandedContent={<Box flexDirection={'column'}>
                    <Typography variant='caption'>{d.email}</Typography>
                    <Typography variant='caption'>{d.phone}</Typography>
                    <Typography variant='caption'>{d.website}</Typography>
                    </Box>
                }>
                <Typography variant='body2'>{d.name}</Typography>
            </Card>
        )
    })}</Box>)
}