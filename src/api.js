export const fetchShips = () => {
    const url = 'https://swapi.dev/api/starships'


  return fetch(url).then((res) => res.json())
  .catch(e => console.error(e));
}
