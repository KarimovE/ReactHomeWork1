export const getData = (setState) => {
    fetch("https://61e6e991ce3a2d001735951e.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setState(data));
  };