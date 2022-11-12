import axios from 'axios'
import { FetchFailure, FetchRequest, FetchSuccess, SetSelectedFailure, SetSelectedSuccess, UpdateAd } from "../../redux/ads/adsActions";
const BASE_URL="http://localhost:3000/"
const fetchAd=(id,dispatch)=>{
    axios
      .get(`${BASE_URL}ads/${id}`)
      .then((resp) => {
     
        dispatch(SetSelectedSuccess(resp.data));
      })
      .catch((error) => {
 
        dispatch(SetSelectedFailure(error.message));
      });
}

const fetchAds=(dispatch)=>{
    dispatch(FetchRequest());
    axios
      .get(`${BASE_URL}ads`)
      .then((res) => {
        
        dispatch(FetchSuccess(res.data));
      })
      .catch((error) => {
        
        dispatch(FetchFailure(error.message));
      });
}


const editAd=(id,phone,description,address,position,email,dispatch)=>{
    axios
    .patch(` ${BASE_URL}ads/${id}`, {
      phone: phone,
      description: description,
      address: address,
      coordinate: position,
    })
    .then((res) => {
      console.log(res);
      dispatch(
        UpdateAd({
          phone: phone,
          description: description,
          address: address,
          coordinate: position,
          id: id,
          email: email,
        })
      );
    })
    .catch((error) => console.log(error));
}

export {fetchAd,fetchAds,editAd}

