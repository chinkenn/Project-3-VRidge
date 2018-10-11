import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
//import cellEditFactory from 'react-bootstrap-table2-editor';
import './groceryList.css';
import Moment from 'react-moment';
//import 'moment-timezone';
import API from "../../../utils/API"


// import React from "react";
//import { render } from "react-dom";
//import API from "../../../utils/API.js";

class groceryList extends Component {
  state = {
    rows: [{}],
    products: [],
    user: this.props.match.params.user,
    item: "",
    quantity: "",
    expirationDate: ""
  };
  loadGrocery = () => {
    API.getGrocery(this.state.user)
      .then(res =>
        this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.loadGrocery();
  };
  handleChange = idx => event => {
    // const { name, item, quantity, value} = e.target;
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleAddRow = e => {
    console.log(this.state.item);
    console.log(this.state.quantity);
    console.log(this.state.products);
    e.preventDefault();
    API.saveGroceryList({
      user: this.state.user,
      list: "list1",
      item: this.state.item,
      qty: this.state.quantity,
      exprDate: this.state.expirationDate,
    })
      .then(res => this.loadGrocery())
      .catch(err => console.log(err));
    this.setState({
      item: "",
      quantity: "",
      expirationDate: ""
    });
  };
  // handleExprDate = (exprDate,id) => {
  //   if(!exprDate) {
  //     return(
  //       <input
  //         type="date"
  //         name="expirationDate"
  //         value={this.state.expirationDate}
  //         onChange={this.handleChange()}
  //         className="form-control"
  //       />)
  //   } else {
  //     return (exprDate);
  //   }
  // }

  moveToFridge = id => {
    API.toFridge(id, {
      fridgeDate: Date.now,
      isFridge: true,
      //exprDate: this.state.expirationDate
    })
      .then(res => this.loadGrocery())
      .catch(err => console.log(err));
  }
  deleteItem = id => {
    API.toFridge(id, {
      isTrash: true
    })
      .then(res => this.loadGrocery())
      .catch(err => console.log(err));
  }

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
    return (
      <div>
        <div className="wrapContainer">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <caption>
                  <h3 style={{ width: '0 auto', borderRadius: '0.25em', textAlign: 'center', border: '4px solid green', padding: '0.5em' }}>Create your grocery list</h3>
                </caption>

                <thead class="thead-dark tb-title">
                  <tr>
                    {/* <th className="text-center"> ID </th> */}
                    <th className="text-center"> Item </th>
                    <th className="text-center"> Quantity </th>
                    <th className="text-center"> Expiration Date </th>
                    <th className="text-center"> Fridge </th>
                    <th className="text-center"> Trash </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map(product => {
                    return (
                      <tr id={product._id} key={product._id}>
                        {/* <td>{product._id}</td> */}
                        <td>{product.item}</td>
                        <td>{product.qty}</td>
                        <td>< Moment format="MM/DD/YYYY">{product.exprDate}</Moment></td>
                        {/* <td>{this.handleExprDate(product.exprDate,product.id)}</td> */}
                        <td><button
                          className="btn btn-info btn-sm"
                          onClick={() => this.moveToFridge(product._id)}
                        >
                          --> Send to fridge
                        </button></td>
                        <td>
                          <button
                            className="glyphicon glyphicon-trash"
                            onClick={() => this.deleteItem(product._id)}
                          >
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      {/* <td>{idx}</td> */}
                      <td>
                        <input
                          type="text"
                          name="item"
                          value={this.state.item}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="expirationDate"
                          value={this.state.expirationDate}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          --> Send to fridge
                        </button>
                      </td>
                      <td className="text-center">
                        <button
                          className="glyphicon glyphicon-trash"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn" style={{ marginLeft: '10px' }} onClick={this.handleAddRow}>
                Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default groceryList;