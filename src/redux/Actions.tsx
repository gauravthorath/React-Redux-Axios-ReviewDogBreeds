import axios from "axios";
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

//Random
export const fetchRandomBreedsRequest = () => {
  //Action Creator
  return {
    type: FETCH_RANDOMBREED_REQUEST,
    //Action
  };
};
const fetchRandomBreedsSuccess = (breed: any) => {
  return {
    type: FETCH_RANDOMBREED_SUCCESS,
    payload: breed,
  };
};
const fetchRandomBreedsFailure = (error: string) => {
  return {
    type: FETCH_RANDOMBREED_FAILURE,
    payload: error,
  };
};

//All Breeds
export const fetchAllBreedsRequest = () => {
  return {
    type: FETCH_ALLBREEDS_REQUEST,
  };
};

const fetchAllBreedsSuccess = (breeds: any) => {
  return {
    type: FETCH_ALLBREEDS_SUCCESS,
    payload: breeds,
  };
};

const fetchAllBreedsFailure = (error: string) => {
  return {
    type: FETCH_ALLBREEDS_FAILURE,
    payload: error,
  };
};

export const fetchAllBreedNamesRequest = () => {
  return {
    type: FETCH_ALLBREEDNAMES_REQUEST,
  };
};

const fetchAllBreedNamesSuccess = (breedNames: any) => {
  return {
    type: FETCH_ALLBREEDNAMES_SUCCESS,
    payload: breedNames,
  };
};

const fetchAllBreedNamesFailure = (error: string) => {
  return {
    type: FETCH_ALLBREEDNAMES_FAILURE,
    payload: error,
  };
};

export const fetchAllBreeds = () => {
  return (dispatch: any) => {
    dispatch(fetchAllBreedsRequest);
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        const breeds = response.data;
        console.log("inAction");
        console.log(response.data);
        dispatch(fetchAllBreedsSuccess(breeds));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAllBreedsFailure(errorMsg));
      });
  };
};

export const fetchRandomBreed = (selected: any) => {
  return (dispatch: any) => {
    console.log("selected");
    console.log(selected);
    if (selected) {
      //in case favorite is alread selected by user
      dispatch(fetchRandomBreedsRequest); //Dispatch for random breed
      axios
        .get(`https://dog.ceo/api/breed/${selected}/images/random`)
        .then((response) => {
          const breed = response.data.message;
          dispatch(fetchRandomBreedsSuccess(breed)); //Dispatch for success of random breed
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchRandomBreedsFailure(errorMsg)); //Dispatch for error of random breed
        });
    } else {
      //in case favorite is not selected by user
      dispatch(fetchRandomBreedsRequest); //Dispatch for random breed
      axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
        const Allbreeds = response.data;
        console.log("Allbreeds");
        console.log(Allbreeds);

        let breedList = [];
        for (var key in Allbreeds.message) {
          if (Allbreeds.message.hasOwnProperty(key)) {
            if (Allbreeds.message[key].length !== 0) {
              breedList.push(key);
            }
          }
        }

        let BreedName =
          breedList[Math.floor(Math.random() * breedList.length - 1)];
        axios.get(`https://dog.ceo/api/breed/${BreedName}/list`).then((res) => {
          let subBreed = res.data.message;
          axios
            .get(
              `https://dog.ceo/api/breed/${BreedName}/${
                subBreed[Math.floor(Math.random() * subBreed.length)]
              }/images/random`
            )
            .then((response) => {
              const breed = response.data.message;
              dispatch(fetchRandomBreedsSuccess(breed)); //Dispatch for success of random breed
            })
            .catch((error) => {
              const errorMsg = error.message;
              dispatch(fetchRandomBreedsFailure(errorMsg)); //Dispatch for error of random breed
            });
        });
      });
    }
  };
};

export const fetchAllBreedNames = () => {
  return (dispatch: any) => {
    dispatch(fetchAllBreedNamesRequest()); //Dispatch for complete breed names list
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        const Allbreeds = response.data;
        console.log("Allbreeds");
        console.log(Allbreeds);

        let breedList = [];
        for (var key in Allbreeds.message) {
          if (Allbreeds.message.hasOwnProperty(key)) {
            if (Allbreeds.message[key].length !== 0) {
              breedList.push(key);
            }
          }
        }

        dispatch(fetchAllBreedNamesSuccess(Allbreeds)); //Dispatch for success of complete breed names list
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchAllBreedNamesFailure(errorMsg)); //Dispatch for error of complete breed names list
      });
  };
};
