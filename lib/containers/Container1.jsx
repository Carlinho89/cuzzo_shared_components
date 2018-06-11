import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container1 extends Component {
    render() {
        return (
            <div>
                <p> Container_1: HELLO WORLD </p> 
                <p> new version 2.2 <
            </div>
        );
    }
}
Container1.propTypes = {
    className: PropTypes.string
};
Container1.defaultPropts = {
    className: null
}

export default Container1;