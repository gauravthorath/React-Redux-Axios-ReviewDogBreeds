import {
  FETCH_ALLBREEDS_SUCCESS,
  FETCH_ALLBREEDS_FAILURE,
  FETCH_ALLBREEDS_REQUEST,
  FETCH_RANDOMBREED_SUCCESS,
  FETCH_RANDOMBREED_FAILURE,
  FETCH_RANDOMBREED_REQUEST,
  FETCH_ALLBREEDNAMES_SUCCESS,
  FETCH_ALLBREEDNAMES_FAILURE,
  FETCH_ALLBREEDNAMES_REQUEST,
} from "./ActionTypes";

const initialState = {
  loading: false,
  breeds: [],
  error: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_RANDOMBREED_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RANDOMBREED_SUCCESS:
      return {
        ...state,
        loading: false,
        breeds: action.payload,
        error: "",
      };

    case FETCH_RANDOMBREED_FAILURE:
      return {
        ...state,
        loading: false,
        breeds: [],
        error: action.payload,
      };

    case FETCH_ALLBREEDS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALLBREEDS_SUCCESS:
      return {
        loading: false,
        breeds: action.payload,
        error: "",
      };

    case FETCH_ALLBREEDS_FAILURE:
      return {
        loading: false,
        breeds: [],
        error: action.payload,
      };

    case FETCH_ALLBREEDNAMES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALLBREEDNAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        breedNames:action.payload,
        error: "",
      };

    case FETCH_ALLBREEDNAMES_FAILURE:
      return {
        ...state,
        loading: false,
        breedNames:[],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
