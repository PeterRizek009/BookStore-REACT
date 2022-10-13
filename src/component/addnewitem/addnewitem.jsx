import React, { Component } from 'react';
import axios from 'axios';
import "./addnewitem.css";


class AddNewItem extends Component {
    state = {
        id: "",
        name: "",
        price: ""
    }

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:3004/Books/");
        //Clone
        const state = { ...this.state };
        //Edit
        state.productName = data.name;
        state.productPrice = data.price;
        state.id = data.id;
        //Set state
        this.setState(state);
    }

    handleChange = (e) => {
        //Clone
        let state = { ...this.state };
        //Edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set state
        this.setState(state);

    };

    handleSubmit = async (e) => {
        e.preventDefault();
        //Call Backend
        const obj = {...this.state,count: 0};
        await axios.post("https://my-json-server.typicode.com/PeterRizek009/PeterRizek009-BookDB/Books", obj);
        console.log("Book added");
    };

    render() {
        return (
            <React.Fragment>
                <div className="title mb-3">
                    <h2>Add New<b>Book</b></h2>
                </div>
                <form className='w-50' onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                            Book name
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}

                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">
                            Product price
                        </label>
                        <input
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">
                            Book Id
                        </label>
                        <input
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </React.Fragment>);
    }
}

export default AddNewItem;