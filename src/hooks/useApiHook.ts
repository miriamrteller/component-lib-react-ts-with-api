import { useState } from "react";

// for speed hardcoding api calls here

export const useApiHook = () => {
  const [data, setData] = useState([]);
  const [isError, setisError] = useState(false);
  const [errormsg, setErrormsg] = useState('')
  const [pending, setPending] = useState(false)

  
async function getData() {
  setPending(true);
  setisError(false);
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      setisError(true)
      setErrormsg(`Response status: ${response.status}`)
    }

    const result = await response.json();
    setPending(false)
    setData(result)
  } catch (error) {
    setisError(true)
    setErrormsg(`Response status: ${(error as Error).message}`);
  }
} 


return {
  data,
  isError,
  errormsg,
  pending,
  getData
}

}
