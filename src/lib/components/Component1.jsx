import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Component1 extends Component {
    render() {
        return (
            <div>
                <p> Component_1: HELLO WORLD </p> 
            </div>
        );
    }
}
Component1.propTypes = {
    className: PropTypes.string
};
Component1.defaultPropts = {
    className: null
}

export default Component1;