export const validate = (phone, address, description, setError) => {
  if (!phone) {
    setError("phone field required!");
    return false;
  } else if (!address) {
    setError("address field required!");
    return false;
  } else if (!description) {
    setError("description field required!");
    return false;
  }
  setError("");
  return true;
};
