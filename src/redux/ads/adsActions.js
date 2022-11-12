const FetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const FetchSuccess = (ads) => {
  return {
    type: "FETCH_SUCCESS",
    payload: ads,
  };
};

const FetchFailure = (errorMessage) => {
  return {
    type: "FETCH_FAILURE",
    payload: errorMessage,
  };
};

const SetSelectedSuccess = (ad) => {
  
  return {
    type: "SET_SELECTED_SUCCESS",
    payload: ad,
  };
};
const SetSelectedFailure = (error) => {
  return {
    type: "SET_SELECTED_FAILURE",
    payload: error,
  };
};
const CreateAd=(ad)=>{
  return {type:"CREATE_AD",payload:ad}
}
const RemoveAd=(id)=>{
  return {type:"REMOVE_AD",payload:id}
}
const UpdateAd=(ad)=>{
  return {type:"UPDATE_AD",payload:ad}
}

export {
  FetchFailure,
  FetchSuccess,
  FetchRequest,
  SetSelectedSuccess,
  SetSelectedFailure,
  CreateAd,
  RemoveAd,
  UpdateAd
};
