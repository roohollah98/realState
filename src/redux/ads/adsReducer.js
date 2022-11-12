const initialState = {
  adsList: [],
  loading: false,
  error: "",
  selected: {},
  selectedError: "",
};

const AdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };

    case "FETCH_SUCCESS":
      return { ...state, adsList: action.payload, loading: false };
    case "FETCH_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "SET_SELECTED_SUCCESS":
      return { ...state, selected: action.payload };
    case "CREATE_AD":
      state.adsList.push({ ...action.payload });
      return { ...state, adsList: [...state.adsList] };
    case "SET_SELECTED_FAILURE":
      return { ...state, selectedError: action.payload };
    case "REMOVE_AD":
      const newAdsList = state.adsList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, adsList: [...newAdsList], selected: {} };
    case "UPDATE_AD":
      const index = state.adsList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.adsList[index].phone = action.payload.phone;
      state.adsList[index].description = action.payload.description;
      state.adsList[index].address = action.payload.address;
      state.adsList[index].coordinate = action.payload.coordinate;
      state.selected.phone = action.payload.phone;
      state.selected.description = action.payload.description;
      state.selected.address = action.payload.address;
      state.selected.coordinate = action.payload.coordinate;

      // state.adsList[index] = {...action.payload};
      return {
        ...state,
        adsList: [...state.adsList],
        selected: { ...state.selected },
      };
    default:
      return state;
  }
};

export default AdsReducer;
