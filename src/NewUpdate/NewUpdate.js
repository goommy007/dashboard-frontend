import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Row, Col, Form, DropdownButton, Dropdown } from 'react-bootstrap';


class NewQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disabled: false,
            title: '',
            description: '',
            selectedOption: ''
        };
    }

    updateDescription(value) {
        this.setState({
            description: value,
        });
    }

    updateTitle(value) {
        this.setState({
            title: value,
        });
    }

    updateStatus(e) {
        const status = e.target.value;
        this.setState({
            status: e.target.value
        })
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await axios.post('http://localhost:8081', {
            title: this.state.title,
            description: this.state.description,
            status: this.state.selectedOption
        });

        window.location.reload();
        this.props.history.push('/');
    }

    async clear() {
        this.setState({
            disabled: true,
        });

        await axios.delete('http://localhost:8081/');

        this.props.history.push('/');
        window.location.reload();
    }



    render() {


        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-primary">
                            <div className="card-header">Add an Update</div>
                            <div className="card-body text-left">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Title:</label>
                                    <input
                                        disabled={this.state.disabled}
                                        type="text"
                                        onBlur={(e) => { this.updateTitle(e.target.value) }}
                                        className="form-control"
                                        placeholder="Enter an update such as INC number and short description"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Description:</label>
                                    <input
                                        disabled={this.state.disabled}
                                        type="text"
                                        onBlur={(e) => { this.updateDescription(e.target.value) }}
                                        className="form-control"
                                        placeholder="Give more context to your Incident."
                                    />

                                </div>
                                <select onChange={(e) => this.setState({ selectedOption: e.target.value })}>
                                    <option value="danger">Select the Level of the Issue</option>
                                    <option value="danger">Danger</option>
                                    <option value="success">Success</option>
                                    <option value="warning">Warning</option>
                                </select>
                                <br /> <br />
                                <tr>
                                    <td><button
                                        disabled={this.state.disabled}
                                        className="btn btn-primary"
                                        onClick={() => { this.submit() }}>
                                        Submit
                </button></td>    &nbsp;
                <td><button
                                        disabled={this.state.disabled}
                                        className="btn btn-primary"
                                        onClick={() => { this.clear() }}>
                                        Delete All
                </button></td>
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NewQuestion);