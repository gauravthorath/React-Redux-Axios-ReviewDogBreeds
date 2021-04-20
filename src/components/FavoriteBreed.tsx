import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomBreed } from "../redux";
import DropDown from "./DropDown";

function FavoriteBreed({ BreedData, fetchRandomBreed }: any) {
  useEffect(() => {
    let selected = sessionStorage.getItem("favoriteBreed")!;
    if (selected && selected !== "Select") {
      fetchRandomBreed(selected.replace(": ", "/"));
    } else {
      fetchRandomBreed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DropDown></DropDown>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Favorite Breed Details</th>
          </tr>
        </thead>
        <tbody className="styled-table">
          <tr>
            <td>
              {BreedData.loading ? (
                <h2>Loading</h2>
              ) : BreedData.error ? (
                <h2>{BreedData.error}</h2>
              ) : (
                BreedData && (
                  <img
                    src={BreedData}
                    alt="Random favorite Sub-breed"
                    className="imgSize"
                  />
                )
              )}
            </td>
          </tr>
          <tr>
            {" "}
            <td>
              {" Favorite Sub-breed Name :  " +
                BreedData.toString().substring(30).split("/")[0]}
            </td>{" "}
          </tr>
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    BreedData: state.breeds,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRandomBreed: (selected: string) =>
      dispatch(fetchRandomBreed(selected)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBreed);
