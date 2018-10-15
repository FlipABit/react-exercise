import React from "react";
import PropTypes from "prop-types";

class StorePicker extends React.Component {

    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToStore = event => {
        event.preventDefault();
        console.log(this.myInput.value.value);
        const storeName = this.myInput.value.value;

        this.props.history.push(`/store/${storeName}`)
    }

    render() {

        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>

                <input ref={this.myInput} type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store </button>
            </form>
        );
    }
}

export default StorePicker;
