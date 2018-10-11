import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import './groceryList.css';
import API from "../../../utils/API";
import moment from "moment";

class Fridge extends Component {
    state = {
        rows: [{}],
        products: [],
        user: this.props.match.params.user
    }

    loadFridge = () => {
        API.getFridge(this.state.user)
            .then(res =>
                this.setState({ products: res.data }))
            .catch(err => console.log(err));
    };

    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }

    deleteItem = id => {
        API.toFridge(id, {
            isTrash: true
        })
            .then(res => this.loadFridge())
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadFridge(this.state.user);
    };

    render() {
        return (
            <div>
                <div className="wrapContainer">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <table style={{ textAlign: 'center'}}
                                className="table table-bordered table-hover"
                                id="tab_logic"
                            >
                                <caption>
                                    <h3 style={{ borderRadius: '0.25em', textAlign: 'center', border: '1px solid green', padding: '0.5em' }}>My Fridge</h3>
                                </caption>

                                <thead class="thead-dark">
                                    <tr>
                                        {/* <th className="text-center"> ID </th> */}
                                        <th className="text-center"> Item </th>
                                        <th className="text-center"> Quantity </th>
                                        <th className="text-center"> Expiration Date </th>
                                        <th className="text-center"> Trash </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.products.map(product => {
                                        // Could change entryDate to exprDate (which is broken) to fix date
                                        const trimmedDate = product.entryDate.replace(/T.+/, "");
                                        const formattedDate = moment(trimmedDate).format("MM/DD/YYYY");
                                        return (
                                            <tr id={product._id} key={product._id}>
                                                {/* <td>{product._id}</td> */}
                                                <td>{product.item}</td>
                                                <td>{product.qty}</td>
                                                <td>{formattedDate}</td>
                                                {/* <td>{this.handleExprDate(product.exprDate,product.id)}</td> */}
                                                <td>
                                                    <div  style={{ textAlign: 'center'}}
                                                        className="glyphicon glyphicon-trash"
                                                        onClick={() => this.deleteItem(product._id)}
                                                    >
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Fridge;