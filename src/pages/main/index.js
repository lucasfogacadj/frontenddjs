import React, { Component } from 'react';
import api from '../../services/api';
import "./styles.css";
import logo from '../../assets/logo.svg'

export default class main extends Component {
    state = {
        newBox: ""
    };
    handleSubimt = async e => {
        e.preventDefault();
        const response = await api.post('boxes', {
            title: this.state.newBox
        });
        this.props.history.push(`/box/${response.data._id}`);
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value })
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubimt}>
                    <img src={logo} alt="" height="300" width="300" />
                    <input
                        placeholder="Criar uma box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
