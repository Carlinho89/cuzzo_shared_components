import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container2 extends Component {
    render() {
        return (
            <div>
                <p> Container_2: HELLO WORLD </p> 
            </div>
        );
    }
}
Container2.propTypes = {
    className: PropTypes.string
};
Container2.defaultPropts = {
    className: null
}

export default Container2;