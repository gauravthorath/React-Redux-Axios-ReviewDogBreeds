//eslint-disable-next-line
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAllBreeds } from "../redux";

function AllBreeds({ BreedData, fetchAllBreeds }: any) {
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllBreeds();
    // eslint-disable-next-line
  }, []);
  var breedList: any = [];

  for (var key in BreedData.message) {
    if (BreedData.message.hasOwnProperty(key)) {
      breedList.push(key + ": " + BreedData.message[key]);
    }
  }

  function filterList(event: any) {
    setSearchText(event.target.value);
    console.log(SearchText);
    const filteredBreedList = breedList.filter(function (item: any) {
      return item.trim().includes(SearchText);
    });
    breedList = filteredBreedList;
  }

  return (
    <>
      <input
        type="text"
        value={SearchText}
        onChange={filterList}
        placeholder="Search"
        className="searchInput"
      />

      <table className="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Breeds</th>
            <th colSpan={22}>Sub-Breeds</th>
          </tr>
        </thead>
        <tbody className="styled-table">
          {breedList.map((item: any, key: any) => {
            return (
              <tr className="active-row" key={key}>
                <td>{key + 1}</td>
                <td>{item.split(":")[0]}</td>
                <td>{item.split(":")[1].split(",")[0]}</td>
                <td>{item.split(":")[1].split(",")[1]}</td>
                <td>{item.split(":")[1].split(",")[2]}</td>
                <td>{item.split(":")[1].split(",")[3]}</td>
                <td>{item.split(":")[1].split(",")[4]}</td>
                <td>{item.split(":")[1].split(",")[5]}</td>
                <td>{item.split(":")[1].split(",")[6]}</td>
                <td>{item.split(":")[1].split(",")[7]}</td>
                <td>{item.split(":")[1].split(",")[8]}</td>
                <td>{item.split(":")[1].split(",")[9]}</td>
                <td>{item.split(":")[1].split(",")[10]}</td>
                <td>{item.split(":")[1].split(",")[11]}</td>
                <td>{item.split(":")[1].split(",")[12]}</td>
                <td>{item.split(":")[1].split(",")[13]}</td>
                <td>{item.split(":")[1].split(",")[14]}</td>
                <td>{item.split(":")[1].split(",")[15]}</td>
                <td>{item.split(":")[1].split(",")[16]}</td>
                <td>{item.split(":")[1].split(",")[17]}</td>
                <td>{item.split(":")[1].split(",")[18]}</td>
                <td>{item.split(":")[1].split(",")[19]}</td>
                <td>{item.split(":")[1].split(",")[20]}</td>
              </tr>
            );
          })}
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
    fetchAllBreeds: () => dispatch(fetchAllBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBreeds);
