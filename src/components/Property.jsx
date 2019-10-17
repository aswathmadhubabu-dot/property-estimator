import React, {Component} from 'react'


class Property extends Component {
    constructor(props){
        super(props);
        const { property } = props;
        console.log(props);
        this.state = {
            "propertyId" : property.propertyId,
            "address" : property.address,
            "bedrooms" : property.bedrooms,
            "bathrooms" : property.bathrooms,
            "yearbuilt" : property.yearbuilt,
            "soldprice" : property.soldprice
        }
    }

    render() {
        return(
            <div>
                <td className="address">{this.state.address}</td>
                <td className="bedrooms">{this.state.bedrooms}</td>
                <td className="bathrooms">{this.state.bathrooms}</td>
                <td className="yearbuilt">{this.state.yearbuilt}</td>
                <td className="soldprice">{this.state.soldprice}</td>
            </div>
        )
    }

}

export default Property;