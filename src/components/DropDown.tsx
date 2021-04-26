import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAllBreedNames } from "../redux";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function DropDown({ breedNames, fetchAllBreedNames }: any) {
  const [favoriteBreed, setFavoriteBreed] = useState("");
  useEffect(() => {
    fetchAllBreedNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const breedList = [];

  if (breedNames) {
    for (var key in breedNames.message) {
      if (breedNames.message.hasOwnProperty(key)) {
        console.log(breedNames.message[key]);
        if (breedNames.message[key].length > 0)
          for (let sub in breedNames.message[key]) {
            breedList.push(key + ": " + breedNames.message[key][sub]);
          }
      }
    }
  }

  const handleFavoriteBreedClick = (): void => {
    let selectedBreed = document.getElementsByClassName("Dropdown-control")[0]
      .textContent;
    if (selectedBreed === "Select") {
      alert(
        "Please select your favorite sub-breed else you will see random sub-breed as your favorite"
      );
      window.location.reload();
    } else if (selectedBreed !== undefined) {
      setFavoriteBreed(selectedBreed?.toString()!);

      sessionStorage.setItem("favoriteBreed", favoriteBreed);
      window.location.reload();
      alert("Favorite sub-breed is set suceessfully!");
    }
  };

  let options = ["Select"];
  breedList.map((item, key) => {
    if (item.split(":")[1].trim().length > 0) options.push(item);
    return item;
  });

  var selectedfavoriteBreed = sessionStorage.getItem("favoriteBreed");
  let defaultOption = options.indexOf(selectedfavoriteBreed!);

  return (
    <>
      <div className="container">
        <span>Favorite Breed</span>
        <Dropdown
          className="formControl"
          options={options}
          onChange={(e) => setFavoriteBreed(e.value)}
          value={options[defaultOption]}
          placeholder="Select your Favorite Breed"
        />
        <button className="button" onClick={handleFavoriteBreedClick}>
          Set as Favorite Breed
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    breedNames: state.breedNames,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllBreedNames: () => dispatch(fetchAllBreedNames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
