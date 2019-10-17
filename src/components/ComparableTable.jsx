import React, { Component } from 'react'
import Property from './Property';

class ComparableTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "propertyList": [],
            "address": "",
            "bedrooms": "",
            "bathrooms": "",
            "yearbuilt": "",
            "soldprice": ""
        }
        this.addProperty = this.addProperty.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addProperty(property) {
        property.propertyId = Math.random() * 100;
        let propertyList = this.state.propertyList;
        propertyList.push(property);
        this.setState({
            propertyList: propertyList
        });
    }

    renderRows() {
        let result = this.state.propertyList;
        let output = [];
        let finalResult = [];
        if (result.length > 0) {
            result.forEach((item) => {   
                output.push(<tr key={item.propertyId}>
                    <Property property={item} />
                </tr>)
            });
        }
        console.log(output);

        return output;
    }

    handleSubmit(event) {
        event.preventDefault();
        let property = {};
        property["address"] = this.state.address;
        property["bedrooms"] = this.state.bedrooms;
        property["bathrooms"] = this.state.bathrooms;
        property["yearbuilt"] = this.state.yearbuilt;
        property["soldprice"] = this.state.soldprice;
        this.addProperty(property);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let finalRows = this.renderRows();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Address :
                        <input type="text" name="address" onChange={this.handleChange} />
                    </label>
                    <label>
                        Bedrooms :
                        <input type="text" name="bedrooms" onChange={this.handleChange} />
                    </label>
                    <label>
                        Bathrooms :
                        <input type="text" name="bathrooms" onChange={this.handleChange} />
                    </label>
                    <label>
                        YearBuilt :
                        <input type="text" name="yearbuilt" onChange={this.handleChange} />
                    </label>
                    <label>
                        SoldPrice :
                        <input type="text" name="soldprice" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <table>
                    {finalRows}
                </table>
            </div>
        )
    }

}

export default ComparableTable;