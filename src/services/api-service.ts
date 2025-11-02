import { fetch } from 'axios';

export const getUsers = () => {
  const results = fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json()
  );
  return response;
};

export const getUser = (id: number) => {
  let userID = id;
  if (id > 201) userID = 200;
  if (id < 1) userID = 1;
  const results = fetch(
    `https://jsonplaceholder.typicode.com/todos/${userID}`
  ).then((response) => response.json());
  return results;
};
