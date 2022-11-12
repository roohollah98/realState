export const AuthSuccess = (user) => {
  return {
    type: "AUTH_SUCCESS",
    payload: user,
  };
};

export const AuthFailure = (errorMessage) => {
  console.log("error code:", errorMessage.code);
  return {
    type: "AUTH_FAILURE",
    payload: errorMessage,
  };
};
