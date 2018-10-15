import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func
    };

    handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedFish = { ...this.props.fish, [event.currentTarget.name]: event.currentTarget.value };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (

            <div className="fish-edit">
                <input onChange={this.handleChange} type="text" name="name" value={this.props.fish.name} />
                <input onChange={this.handleChange} type="text" name="price" value={this.props.fish.price} />
                <select onChange={this.handleChange} name="status" value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea onChange={this.handleChange} name="desc" value={this.props.fish.desc}></textarea>
                <input onChange={this.handleChange} type="text" name="image" src={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>

        );
    }
}

export default EditFishForm;

