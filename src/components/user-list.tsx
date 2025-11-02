import { useApiHook } from 'hooks/useApiHook';
import { useEffect } from 'react';

export const UserList = () =>{

    const { data, getData, pending, isError } = useApiHook();

    useEffect(()=>{ getData() },[])
    
    return <>{data}</>
}