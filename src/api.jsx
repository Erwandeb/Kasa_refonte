export const getData = () => {
  return fetch(process.env.PUBLIC_URL + '/annonces.json')
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error fetching data');
      }
    })
    .then(data => ({ success: true, data }))
    .catch(error => ({ success: false, error: error.message }));
}