import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Movie from "./Movie";

class MovieWall extends Component {
  constructor() {
    super();
    this.state = {
      yearValues: [],
      genreValues: [],
      chosenGenre: "",
      chosenYear: "",
    };
    this.onDropdownSelectedGenre = this.onDropdownSelectedGenre.bind(this);
    this.onDropdownSelectedYear = this.onDropdownSelectedYear.bind(this);
    this.onResetAll = this.onResetAll.bind(this);
  }

  onDropdownSelectedGenre(e) {
    this.setState({ chosenGenre: e }, function () {
      console.log(this.state.chosenGenre);
    });
  }

  onDropdownSelectedYear(e) {
    this.setState({ chosenYear: e }, function () {
      console.log(this.state.chosenYear);
    });
  }

  onResetAll() {
    this.setState({ chosenGenre: "", chosenYear: "" }, function () {
      console.log(this.state.chosenGenre);
      console.log(this.state.chosenYear);
    });
  }

  render() {
    console.log("from MovieWall>>>>>>>>>");
    console.log(this.props.movies);

    //Get array of unique Production Year values
    this.props.movies.forEach((movie) => {
      var productionYearValue = this.state.yearValues.find(
        (x) => x === movie.productionYear
      );
      if (!productionYearValue) {
        this.state.yearValues.push(movie.productionYear);
      }
    });
    this.state.yearValues.sort((a, b) => a - b);

    //Get array of unique Genre values
    this.props.movies.forEach((movie) => {
      var genreValue = this.state.genreValues.find((x) => x === movie.genre);
      if (!genreValue) {
        this.state.genreValues.push(movie.genre);
      }
    });
    this.state.genreValues.sort((a, b) => a - b);

    //1. populate props and dropdowns by selection
    //2. set mainMenu if selection made
    let propsBySelection = this.props.movies.map((movie, index) => (
      <Movie key={index} movie={movie} {...this.props} index={index} />
    ));

    let mainMenu = "";

    let dropdownGenre = (
      <DropdownButton
        alignRight
        title="Genres"
        id="dropdown-basic-button"
        onSelect={this.onDropdownSelectedGenre}
        variant="Primary"
        size="lg"
      >
        <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Adventure">Adventure</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Animation">Animation</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Comedy">Comedy</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="Fantasy">Fantasy</Dropdown.Item>
      </DropdownButton>
    );

    let dropdownYear = (
      <DropdownButton
        alignRight
        title="ProductionYear"
        id="dropdown-basic-button"
        onSelect={this.onDropdownSelectedYear}
        variant="Primary"
        size="lg"
      >
        <Dropdown.Item eventKey="2003">2003</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2006">2006</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2010">2010</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2013">2013</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2015">2015</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2016">2016</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2018">2018</Dropdown.Item>
      </DropdownButton>
    );

    if (this.state.chosenGenre !== "") {
      const noDetails = true;
      propsBySelection = this.props.movies
        .filter((movie) => movie.genre === this.state.chosenGenre)
        .map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            {...this.props}
            index={index}
            noDetails={noDetails}
          />
        ));
      dropdownYear = "";
      mainMenu = (
        <div className="navLink">
          <Button variant="primary" size="lg" onClick={this.onResetAll}>
            Main Menu
          </Button>
        </div>
      );
    }

    if (this.state.chosenYear !== "") {
      const noDetails = true;
      propsBySelection = this.props.movies
        .filter(
          (movie) => movie.productionYear === parseInt(this.state.chosenYear)
        )
        .map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            {...this.props}
            index={index}
            noDetails={noDetails}
          />
        ));
      dropdownGenre = "";
      mainMenu = (
        <div className="navLink">
          <Button variant="primary" size="lg" onClick={this.onResetAll}>
            Main Menu
          </Button>
        </div>
      );
    }

    return (
      <div>
        <div className="menuLinks">
          {dropdownGenre} {dropdownYear} {mainMenu}
        </div>
        <div className="photo-grid">{propsBySelection}</div>
      </div>
    );
  }
}
export default MovieWall;
