import React, { Component } from "react";
import "./myCSS.css";
import logo from "./search.png";

//------------------------------------------------------------------------------
class Pagination extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Islamabad",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Islamabad",
        },
        {
          LOC: "Islamabad",
          Time: "4PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Karachi",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Karachi",
        },
        {
          LOC: "Karachi",
          Time: "4PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Islamabad",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Islamabad",
        },
        {
          LOC: "Islamabad",
          Time: "4PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Karachi",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Karachi",
        },
        {
          LOC: "Karachi",
          Time: "4PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Islamabad",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Islamabad",
        },
        {
          LOC: "Islamabad",
          Time: "4PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Karachi",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Karachi",
        },
        {
          LOC: "Karachi",
          Time: "4PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Islamabad",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Islamabad",
        },
        {
          LOC: "Islamabad",
          Time: "4PM",
          DESC: "Comfortable Journey to Islamabad. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
        {
          Time: "8AM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
          LOC: "Karachi",
        },
        {
          Time: "12PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://avltoday.6amcity.com/wp-content/uploads/sites/7/2020/12/Amtrak-rail-service-train-asheville-nc-avltoday-970x545.jpg",
          LOC: "Karachi",
        },
        {
          LOC: "Karachi",
          Time: "4PM",
          DESC: "Comfortable Journey to Karachi. Services Include Free Wifi, Meet & Greet, Toilets and facilities for disable persons",
          SRC: "https://freedesignfile.com/upload/2016/10/modern-commuter-train-with-railway-station-HD-picture-02.jpg",
        },
      ],
      currentPage: 1,
      todosPerPage: 10,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    var FilteredTodos;
    if (this.props.value == 1) {
      FilteredTodos = currentTodos.filter(function (proj) {
        if (proj.Time === "8AM") return proj;
      });
    }

    if (this.props.value == 2) {
      FilteredTodos = currentTodos.filter(function (proj) {
        if (proj.Time === "12PM") return proj;
      });
    }

    if (this.props.value == 3) {
      FilteredTodos = currentTodos.filter(function (proj) {
        if (proj.Time === "4PM") return proj;
      });
    }

    if (this.props.value == 4) {
      FilteredTodos = currentTodos.filter(function (proj) {
        if (proj.LOC === "Islamabad") return proj;
      });
    }

    if (this.props.value == 5) {
      FilteredTodos = currentTodos.filter(function (proj) {
        if (proj.LOC === "Karachi") return proj;
      });
    }

    const renderTodos = FilteredTodos.map((todo, index) => {
      return (
        <div
          style={{
            padding: "10px",
            border: "2px solid #ddd",
            width: "75%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "black",
            color: "white",
            borderColor: "#e75480",
          }}
        >
          <img
            style={{
              border: "2px solid white",
              marginRight: "10px",
              width: "300px",
              height: "200px",
            }}
            src={todo.SRC}
          ></img>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h
                style={{
                  fontSize: "20px",
                  fontFamily: "Open Sans",
                  color: "#e75480",
                }}
              >
                Departure Time :{" "}
              </h>
              <p
                style={{
                  margin: "0px",
                  fontSize: "20px",
                  fontFamily: "Open Sans",
                  color: "#ffff",
                }}
              >
                {todo.Time}
              </p>
            </div>
            <p
              style={{
                fontSize: "18px",
                fontFamily: "Open Sans",
                color: "white",
              }}
            >
              {todo.DESC}
            </p>
            <p style={{ color: "white" }}>Location: {todo.LOC}</p>

            <button
              style={{
                width: "100px",
                backgroundColor: "#e75480",
                color: "white",
                borderBlockColor: "#e75480",
              }}
            >
              Buy Ticket
            </button>
          </div>
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <button
          style={{
            backgroundColor: "#e75480",
            color: "white",
            borderColor: "black",
          }}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    return (
      <div>
        <ul>{renderTodos}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

//export default Pagination;

//----------------------------------------------------------------

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { mystate: "1" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mystate: event.target.value });
    console.log(this.state.mystate);
  }

  render() {
    if (this.state.mystate == 1) {
      return (
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "35px",
            }}
          >
            <select className="DropDown" onChange={this.handleChange}>
              <option value="1">Train at 08AM</option>
              <option value="2">Train at 12PM</option>
              <option value="3">Train at 04PM</option>
            </select>
            <input
              style={{
                width: "570px",
                height: "35px",
                borderColor: "black",
              }}
              placeholder="Search.."
            ></input>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e75480",
                border: "solid 1px white",
              }}
              src={logo}
            ></img>
            <select
              onChange={this.handleChange}
              style={{
                marginLeft: "20px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <option value="4">Islamabad</option>
              <option value="5">Karachi</option>
            </select>
          </div>
          <Pagination value="1"></Pagination>
        </div>
      );
    }

    if (this.state.mystate == 4) {
      return (
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "35px",
            }}
          >
            <select className="DropDown" onChange={this.handleChange}>
              <option value="1">Train at 08AM</option>
              <option value="2">Train at 12PM</option>
              <option value="3">Train at 04PM</option>
            </select>
            <input
              style={{
                width: "570px",
                height: "35px",
                borderColor: "black",
              }}
              placeholder="Search.."
            ></input>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e75480",
                border: "solid 1px white",
              }}
              src={logo}
            ></img>
            <select
              onChange={this.handleChange}
              style={{
                marginLeft: "20px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <option value="4">Islamabad</option>
              <option value="5">Karachi</option>
            </select>
          </div>
          <Pagination value="4"></Pagination>
        </div>
      );
    }

    if (this.state.mystate == 5) {
      return (
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "35px",
            }}
          >
            <select className="DropDown" onChange={this.handleChange}>
              <option value="1">Train at 08AM</option>
              <option value="2">Train at 12PM</option>
              <option value="3">Train at 04PM</option>
            </select>
            <input
              style={{
                width: "570px",
                height: "35px",
                borderColor: "black",
              }}
              placeholder="Search.."
            ></input>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e75480",
                border: "solid 1px white",
              }}
              src={logo}
            ></img>
            <select
              onChange={this.handleChange}
              style={{
                marginLeft: "20px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <option value="4">Islamabad</option>
              <option value="5">Karachi</option>
            </select>
          </div>
          <Pagination value="5"></Pagination>
        </div>
      );
    }

    if (this.state.mystate == 2) {
      return (
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "35px",
            }}
          >
            <select className="DropDown" onChange={this.handleChange}>
              <option value="1">Train at 08AM</option>
              <option value="2">Train at 12PM</option>
              <option value="3">Train at 04PM</option>
            </select>
            <input
              style={{
                width: "570px",
                height: "35px",
                borderColor: "black",
              }}
              placeholder="Search.."
            ></input>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e75480",
                border: "solid 1px white",
              }}
              src={logo}
            ></img>
            <select
              onChange={this.handleChange}
              style={{
                marginLeft: "20px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <option value="4">Islamabad</option>
              <option value="5">Karachi</option>
            </select>
          </div>
          <Pagination value="2"></Pagination>
        </div>
      );
    }
    if (this.state.mystate == 3) {
      return (
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "35px",
            }}
          >
            <select className="DropDown" onChange={this.handleChange}>
              <option value="1">Train at 08AM</option>
              <option value="2">Train at 12PM</option>
              <option value="3">Train at 04PM</option>
            </select>
            <input
              style={{
                width: "570px",
                height: "35px",
                borderColor: "black",
              }}
              placeholder="Search.."
            ></input>
            <img
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#e75480",
                border: "solid 1px white",
              }}
              src={logo}
            ></img>
            <select
              onChange={this.handleChange}
              style={{
                marginLeft: "20px",
                color: "white",
                backgroundColor: "black",
              }}
            >
              <option value="4">Islamabad</option>
              <option value="5">Karachi</option>
            </select>
          </div>
          <Pagination value="3"></Pagination>
        </div>
      );
    } else {
      return <p1>There is Nothing to show</p1>;
    }
  }
}

export default DropDown;
