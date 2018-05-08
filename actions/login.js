const login = (name, password) => {
  return {
    type: 'LOGIN',
    name,
    password,
  };
};

export default reveal;
