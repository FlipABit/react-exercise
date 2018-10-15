import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propType = {
        addFish: PropTypes.func
    };

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    }

    render() {
        return (

            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="price"/>
                <select name="status" ref={this.statusRef} type="text" placeholder="status">
                    <option value="Available">Fresh!</option>
                    <option value="Sold out!">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="desc"></textarea>
                <input name="image" ref={this.imageRef} type="text" placeholder="image"/>
                <button type="submit">+ Add Fish</button>
            </form>

        );
    }
}

export default AddFishForm;